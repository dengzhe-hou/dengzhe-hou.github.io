const validationDemo = document.querySelector("[data-validation-demo]");

function optionText(label) {
  return label[0].toUpperCase() + label.slice(1);
}

function showValidationAnswer(panel, answer) {
  panel.querySelector("[data-real-question]").textContent = answer.question;
  panel.querySelector("[data-real-choice]").textContent = optionText(answer.options[answer.selected]);
  panel.querySelector("[data-real-reference]").textContent = optionText(answer.options[answer.reference]);
  panel.querySelector("[data-real-options]").replaceChildren(...answer.options.map((label, index) => {
    const row = document.createElement("li");
    row.className = "validation-option";
    row.dataset.selected = String(index === answer.selected);

    const name = document.createElement("span");
    name.textContent = optionText(label);
    const value = document.createElement("strong");
    const percent = 100 * answer.probabilities[index];
    value.textContent = percent > 0 && percent < 0.1 ? "<0.1%" : percent.toFixed(1) + "%";
    const line = document.createElement("div");
    line.className = "validation-option-line";
    line.append(name, value);

    const bar = document.createElement("div");
    bar.className = "validation-bar";
    bar.setAttribute("aria-hidden", "true");
    const fill = document.createElement("span");
    fill.style.width = percent + "%";
    bar.append(fill);
    row.append(line, bar);
    return row;
  }));
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

async function mountValidationDemo(root) {
  const response = await fetch("assets/validation-demo.json");
  if (!response.ok) throw new Error("Saved validation outputs unavailable");
  const data = await response.json();
  const peak = Math.max(1, ...data.traces.flat(2).map(Math.abs));
  const pair = root.querySelector("#real-pair-panel");
  pair.querySelector("[data-real-traces]").append(...data.traces.map((trace, index) => {
    return makeTrace(trace, data.channels, peak, index === 0 ? "Window A" : "Window B");
  }));
  showValidationAnswer(pair, data.pair);

  const same = root.querySelector("#real-switch-panel");
  same.querySelector("[data-real-traces]").append(makeTrace(
    data.traces[data.switch.window], data.channels, peak,
    data.switch.window === 0 ? "Window A" : "Window B",
  ));
  const chooser = same.querySelector(".validation-questions");
  const buttons = data.switch.questions.map(question => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "demo-option";
    button.textContent = question.title;
    return button;
  });
  function selectQuestion(index) {
    buttons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
    showValidationAnswer(same, data.switch.questions[index]);
  }
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => selectQuestion(index));
    chooser.append(button);
  });
  selectQuestion(0);
  root.querySelector("[data-real-status]").hidden = true;
}

if (validationDemo) {
  mountValidationDemo(validationDemo).catch(() => {
    validationDemo.querySelector("[data-real-status]").textContent = "The saved validation examples could not be loaded.";
  });
}
