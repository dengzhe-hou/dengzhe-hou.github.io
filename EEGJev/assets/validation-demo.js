const validationDemo = document.querySelector("[data-validation-demo]");

function optionText(label) {
  return label[0].toUpperCase() + label.slice(1);
}

function percentText(probability) {
  const percent = 100 * probability;
  return percent > 0 && percent < 0.1 ? "<0.1%" : percent.toFixed(1) + "%";
}

function showProbabilities(panel, options, probabilities, selected = null) {
  panel.querySelector("[data-real-options]").replaceChildren(...options.map((label, index) => {
    const row = document.createElement("li");
    row.className = "validation-option";
    row.dataset.selected = String(index === selected);

    const name = document.createElement("span");
    name.textContent = optionText(label);
    const value = document.createElement("strong");
    value.textContent = percentText(probabilities[index]);
    const line = document.createElement("div");
    line.className = "validation-option-line";
    line.append(name, value);

    const bar = document.createElement("div");
    bar.className = "validation-bar";
    bar.setAttribute("aria-hidden", "true");
    const fill = document.createElement("span");
    fill.style.width = 100 * probabilities[index] + "%";
    bar.append(fill);
    row.append(line, bar);
    return row;
  }));
}

function showValidationAnswer(panel, answer) {
  panel.querySelector("[data-real-question]").textContent = answer.question;
  panel.querySelector("[data-real-choice]").textContent = optionText(answer.options[answer.selected]);
  panel.querySelector("[data-real-reference]").textContent = optionText(answer.options[answer.reference]);
  showProbabilities(panel, answer.options, answer.probabilities, answer.selected);
}

function makeTrace(windowSamples, channels, peak, title) {
  const figure = document.createElement("figure");
  figure.className = "validation-trace";
  const heading = document.createElement("figcaption");
  heading.textContent = title;
  const graph = document.createElement("div");
  graph.className = "validation-trace-grid";
  const labels = document.createElement("ul");
  for (const channel of channels) {
    const label = document.createElement("li");
    label.textContent = channel;
    labels.append(label);
  }
  const canvas = document.createElement("canvas");
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", title + ", a one-second EEG trace");
  graph.append(labels, canvas);
  const scale = document.createElement("div");
  scale.className = "validation-time";
  scale.innerHTML = "<span>0 s</span><span>1 s</span>";
  figure.append(heading, graph, scale);

  const resize = new ResizeObserver(() => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) return;
    const density = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * density);
    canvas.height = Math.round(height * density);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(density, 0, 0, density, 0, 0);
    const rowHeight = height / windowSamples.length;
    const amplitude = 0.42 * rowHeight / peak;
    windowSamples.forEach((samples, index) => {
      const center = (index + 0.5) * rowHeight;
      ctx.strokeStyle = "#e0e6e8";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, center);
      ctx.lineTo(width, center);
      ctx.stroke();
      ctx.strokeStyle = "#185d60";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      samples.forEach((sample, time) => {
        const x = 1 + time * (width - 2) / (samples.length - 1);
        const y = center - sample * amplitude;
        if (time === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    });
  });
  resize.observe(canvas);
  return figure;
}

function addTraceWindows(panel, data, peak, indices) {
  panel.querySelector("[data-real-traces]").append(...indices.map(index => {
    return makeTrace(data.traces[index], data.channels, peak, optionText(data.pair.options[index]));
  }));
}

function addQuestionButtons(panel, titles, show) {
  const buttons = titles.map(title => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "demo-option";
    button.textContent = title;
    return button;
  });
  function select(index) {
    buttons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    show(index);
  }
  buttons.forEach((button, index) => button.addEventListener("click", () => select(index)));
  panel.querySelector(".validation-questions").append(...buttons);
  select(0);
}

function showOrderedScore(panel, ordered) {
  panel.querySelector("[data-ordered-question]").textContent = ordered.question;
  showProbabilities(panel, ordered.options, ordered.probabilities);
  const score = ordered.score.toFixed(3);
  panel.querySelector("[data-ordered-value]").textContent = score;
  panel.querySelector("[data-ordered-scale]").textContent =
    ordered.values[0] + "–" + ordered.values.at(-1) + " scale";
  const terms = ordered.values.map((value, index) => value + " × " + ordered.probabilities[index].toFixed(4));
  const equation = [...terms, "≈ " + score].map((term, index) => {
    const part = document.createElement("span");
    part.textContent = (index > 0 && index < terms.length ? "+ " : "") + term;
    return part;
  });
  panel.querySelector("[data-ordered-equation]").replaceChildren(...equation);
}

async function mountValidationDemo(root) {
  const response = await fetch("assets/validation-demo.json?v=typed-outputs");
  if (!response.ok) throw new Error("Saved outputs unavailable");
  const data = await response.json();
  const peak = Math.max(1, ...data.traces.flat(2).map(Math.abs));
  const pair = root.querySelector("#real-pair-panel");
  addTraceWindows(pair, data, peak, [0, 1]);
  showValidationAnswer(pair, data.pair);

  const same = root.querySelector("#real-switch-panel");
  addTraceWindows(same, data, peak, [data.switch.window]);
  addQuestionButtons(same, data.switch.questions.map(question => question.title), index => {
    showValidationAnswer(same, data.switch.questions[index]);
  });

  const noul = root.querySelector("#real-noul-panel");
  addTraceWindows(noul, data, peak, [0, 1]);
  addQuestionButtons(noul, data.pair.options.map(optionText), index => {
    noul.querySelector("[data-noul-statement]").textContent = data.noulStatements[index];
    noul.querySelector("[data-noul-probability]").textContent = percentText(data.pair.probabilities[index]);
    noul.querySelector("[data-noul-reference]").textContent = index === data.pair.reference ? "True" : "False";
  });

  showOrderedScore(root.querySelector("#real-score-panel"), data.orderedScore);
  root.querySelector("[data-real-status]").hidden = true;
}

if (validationDemo) {
  mountValidationDemo(validationDemo).catch(() => {
    validationDemo.querySelector("[data-real-status]").textContent = "The saved outputs could not be loaded.";
  });
}
