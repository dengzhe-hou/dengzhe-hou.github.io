const trackButtons = document.querySelectorAll("[data-track-view]");
const trackValues = [...document.querySelectorAll("[data-metric]")].map((cell) => ({
  cell,
  tasks: cell.textContent,
  metrics: cell.dataset.metric,
}));

for (const button of trackButtons) {
  button.addEventListener("click", () => {
    const view = button.dataset.trackView;
    for (const sibling of trackButtons) {
      sibling.setAttribute("aria-pressed", String(sibling === button));
    }
    for (const value of trackValues) {
      value.cell.textContent = value[view];
    }
    document.querySelector("#track-note").textContent = view === "tasks"
      ? "Scored tasks by question type"
      : "Metrics reported for each question type";
  });
}

const examples = {
  expression: { question: "What was the facial expression?", answer: "Fearful", choice: "fearful" },
  hand: { question: "Which hand did the instruction specify?", answer: "Left hand", choice: "left" },
};
const questionButtons = document.querySelectorAll("[data-question]");

for (const button of questionButtons) {
  button.addEventListener("click", () => {
    const example = examples[button.dataset.question];
    for (const sibling of questionButtons) {
      sibling.setAttribute("aria-pressed", String(sibling === button));
    }
    document.querySelector("#question-text").textContent = example.question;
    for (const choice of document.querySelectorAll("[data-choice]")) {
      const selected = choice.dataset.choice === example.choice;
      choice.classList.toggle("answer", selected);
      if (selected) {
        choice.setAttribute("aria-current", "true");
      } else {
        choice.removeAttribute("aria-current");
      }
    }
    document.querySelector("#example-answer").textContent = "Example answer: " + example.answer;
  });
}
