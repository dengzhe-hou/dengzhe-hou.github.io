const questionTypes = {
  D1: { name: "Single attribute", tasks: 109, metric: "Balanced accuracy", rank: "Primary" },
  D2: { name: "Paired attributes", tasks: 59, metric: "Balanced accuracy per question", rank: "Primary" },
  D3: { name: "Ordered bins", tasks: 22, metric: "Balanced accuracy", rank: "Primary" },
  D4: { name: "Answer or decline", tasks: 31, metric: "Group-balanced score", rank: "Full-label check" },
  T1: { name: "Compare two windows", tasks: 93, metric: "Accuracy" },
  T2: { name: "Locate an event", tasks: 17, metric: "Accuracy" },
};

const modelProtocol = {
  EEGNet: "Task-specific EEG classifier trained on the benchmark.",
  "Ordinary head": "Classifier using EEGJev’s shared EEG encoder.",
  LaBraM: "EEG foundation model adapted to benchmark tasks.",
  NeuroLM: "NeuroLM was instruction-tuned on D1–D3 questions.",
  METIS: "Evaluated using released weights.",
  LEAF: "Evaluated using released weights. The number identifies the instruction mode.",
};

const comparisonProtocol = {
  "Act vs thresholds": "EEGJev uses its trained refusal head. The baseline uses a confidence threshold.",
  "Full-label check": "Both models check the offered options against their full-label prediction.",
  "Fixed D1 compositions": "The baseline combines existing D1 outputs with fixed rules.",
  "Readouts trained on T2 labels": "EEGJev and the baseline readouts used the same T2 supervision.",
};

const typeButtons = (current) => Object.keys(questionTypes).map((type) =>
  '<button type="button" data-results-type="' + type + '" aria-pressed="' + (type === current) +
  '" aria-label="' + type + ' ' + questionTypes[type].name + '">' + type + '</button>'
).join("");

const formatScore = (score) => score.toFixed(2) + "%";
const formatDelta = (delta) => {
  const value = Number(delta.toFixed(2));
  return (value > 0 ? "+" : value < 0 ? "−" : "") + Math.abs(value).toFixed(2) + " pp";
};
const drawBar = (score, model) =>
  '<span class="result-bar ' + model + '" aria-hidden="true"><span style="--result-width:' +
  score + '%"></span></span>';

function rankRows(type, rows) {
  const { tasks, rank } = questionTypes[type];
  if (!rank) return [];
  const comparable = rows.filter((row) =>
    row.protocol === rank && row.common_tasks === tasks &&
    !["METIS", "LEAF"].includes(row.model.split(" ")[0]));
  if (!comparable.length) return [];
  return [
    { model: "EEGJev", score: comparable[0].eegjev_pct },
    ...comparable.map((row) => ({ model: row.model, score: row.baseline_pct })),
  ].sort((a, b) => b.score - a.score);
}

function rankList(ranked) {
  return '<ol class="rank-list" role="list">' + ranked.map(({ model, score }, index) => {
    const position = String(index + 1).padStart(2, "0");
    const content = '<span class="rank-num" aria-hidden="true">' + position + '</span><span>' +
      model + '</span>' + drawBar(score, model === "EEGJev" ? "jev" : "comparison") +
      '<strong>' + formatScore(score) + '</strong>';
    return '<li><div>' + content + '</div></li>';
  }).join("") + '</ol>';
}

function pairedRows(rows, type) {
  if (!rows.length) return '<p class="results-empty">No baselines match this search.</p>';
  return rows.map((row) => {
    const delta = row.eegjev_pct - row.baseline_pct;
    const model = row.model.startsWith("LEAF") ? "LEAF" : row.model;
    const protocol = comparisonProtocol[row.protocol] ?? modelProtocol[model];
    return '<details class="result-pair" data-pair-model="' + row.model + '"><summary>' +
      '<span class="pair-model">' + row.model + '<small>' + row.common_tasks + ' of ' +
      questionTypes[type].tasks + ' tasks</small></span>' +
      '<span class="pair-scores"><span><span class="sr-only">EEGJev </span>' +
      drawBar(row.eegjev_pct, "jev") + '<strong>' + formatScore(row.eegjev_pct) +
      '</strong></span><span><span class="sr-only">Baseline </span>' +
      drawBar(row.baseline_pct, "comparison") + '<strong>' + formatScore(row.baseline_pct) +
      '</strong></span></span><span class="pair-delta">' + formatDelta(delta) +
      '</span><span class="pair-chevron" aria-hidden="true"></span></summary>' +
      '<p>' + protocol + '</p></details>';
  }).join("");
}

const heroResults = document.querySelector("#hero-results");
const trackNote = document.querySelector("#track-note");
const board = document.querySelector("#leaderboard");
const search = document.querySelector("#baseline-search");
const sort = document.querySelector("#result-sort");
const protocol = document.querySelector("#result-protocol");
const boardTypes = board.querySelector(".results-types");
const resultScoring = document.querySelector("#result-scoring");

let selectedType = "D1";

function renderHero() {
  const type = questionTypes[selectedType];
  const rows = benchResultRows.filter((row) => row.panel === selectedType);
  const ranked = rankRows(selectedType, rows);
  const eegnet = rows.find((row) => row.model === "EEGNet");
  const isRanking = ranked.length > 0;
  const sharedTasks = isRanking ? type.tasks : eegnet.common_tasks;
  const context = isRanking ? (type.rank === "Primary" ? "Trained models" : type.rank) : eegnet.protocol;
  const summaryRows = isRanking ? ranked : [
    { model: "EEGJev", score: eegnet.eegjev_pct },
    { model: "EEGNet", score: eegnet.baseline_pct },
  ];
  const cells = summaryRows.map(({ model, score }, position) =>
    '<tr><th scope="row"><span class="hero-model">' +
    (isRanking ? '<span class="hero-position">' + (position + 1) + '</span>' : '') +
    model + '</span></th><td><span class="hero-score">' +
    drawBar(score, model === "EEGJev" ? "jev" : "comparison") +
    '<strong>' + formatScore(score) + '</strong></span></td><td>' + sharedTasks + '</td></tr>'
  ).join("");
  heroResults.innerHTML =
    '<div class="hero-result-types" role="group" aria-label="Select a question type">' +
    typeButtons(selectedType) + '</div><div class="hero-result-label"><strong>' + type.name +
    '</strong><span>' + context + '</span></div>' +
    '<table class="hero-score-table" aria-label="' + type.name + ' benchmark results"><thead>' +
    '<tr><th scope="col">Model</th><th scope="col">Score</th><th scope="col">Shared tasks</th></tr>' +
    '</thead><tbody>' + cells + '</tbody></table>';
  trackNote.textContent = type.metric;
}

function renderPairs() {
  const query = search.value.trim().toLowerCase();
  const rows = benchResultRows.filter((row) => row.panel === selectedType &&
    row.protocol === protocol.value && row.model.toLowerCase().includes(query));
  if (sort.value === "tasks") rows.sort((a, b) => b.common_tasks - a.common_tasks);
  if (sort.value === "delta") rows.sort((a, b) => (b.eegjev_pct - b.baseline_pct) - (a.eegjev_pct - a.baseline_pct));
  if (sort.value === "name") rows.sort((a, b) => a.model.localeCompare(b.model));
  document.querySelector("#result-count").textContent = rows.length + (rows.length === 1 ? " comparison" : " comparisons");
  document.querySelector("#matched-results").innerHTML = pairedRows(rows, selectedType);
}

function selectType(type, fromHero, moveFocus) {
  selectedType = type;
  const { name, tasks, metric, rank } = questionTypes[type];
  const rows = benchResultRows.filter((row) => row.panel === type);
  const protocols = [...new Set(rows.map((row) => row.protocol))];
  const ranked = rankRows(type, rows);
  const rankRule = rank === "Primary" ? "Models trained on benchmark tasks" : rank;
  document.querySelector("#result-track").textContent = type + " · " + name;
  document.querySelector("#result-metric").textContent = metric + " · " + tasks + " scored tasks";
  document.querySelector("#results-ranked").innerHTML = ranked.length
    ? '<section class="results-ranking" aria-labelledby="ranking-title"><div><h4 id="ranking-title">Full-coverage ranking</h4><p>' +
      rankRule + ' · Same ' + tasks + ' tasks</p></div>' + rankList(ranked) + '</section>'
    : "";
  protocol.innerHTML = protocols.map((choice) => '<option>' + choice + '</option>').join("");
  document.querySelector("#protocol-filter").hidden = protocols.length === 1;
  boardTypes.innerHTML = typeButtons(type);
  renderHero();
  renderPairs();
  if (moveFocus) {
    const origin = fromHero ? heroResults : boardTypes;
    origin.querySelector('[data-results-type="' + type + '"]').focus();
  }
}

function listenForType(container, fromHero) {
  container.addEventListener("click", (event) => {
    const type = event.target.dataset.resultsType;
    if (type) selectType(type, fromHero, true);
  });
  container.addEventListener("keydown", (event) => {
    const keys = Object.keys(questionTypes);
    const index = keys.indexOf(event.target.dataset.resultsType);
    if (index === -1) return;
    let next;
    switch (event.key) {
      case "ArrowLeft": next = (index + keys.length - 1) % keys.length; break;
      case "ArrowRight": next = (index + 1) % keys.length; break;
      case "Home": next = 0; break;
      case "End": next = keys.length - 1; break;
      default: return;
    }
    event.preventDefault();
    selectType(keys[next], fromHero, true);
  });
}

listenForType(heroResults, true);
listenForType(boardTypes, false);
search.addEventListener("input", renderPairs);
sort.addEventListener("change", renderPairs);
protocol.addEventListener("change", renderPairs);
resultScoring.addEventListener("click", () => {
  document.getElementById("score-tab-" + selectedType.toLowerCase()).click();
});
board.hidden = false;
selectType("D1", false, false);
