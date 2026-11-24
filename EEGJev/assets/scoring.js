(() => {
  const scoring = document.querySelector("#scoring");
  if (!scoring) return;

  for (const form of scoring.querySelectorAll("[data-scoring-type]")) {
    const questions = [...form.querySelectorAll("[data-score-answer]")];
    const results = form.querySelector("[data-scoring-results]");
    const feedback = form.querySelector("[data-scoring-feedback]");
    const outputs = [...results.querySelectorAll("[data-scoring-result]")];

    function clearResults() {
      results.hidden = true;
      feedback.textContent = "";
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const selected = questions.map((question) => question.querySelector("input:checked"));
      if (selected.some((choice) => choice === null)) {
        clearResults();
        return;
      }

      const correct = selected.filter((choice, index) => choice.value === questions[index].dataset.scoreAnswer).length;
      const values = {
        correct: questions.length === 1 ? (correct ? "Correct" : "Incorrect") : correct + " / " + questions.length,
        joint: correct === questions.length ? "1" : "0",
        distance: String(Math.abs(Number(selected[0].value) - Number(questions[0].dataset.scoreAnswer))),
        mean: (correct / questions.length).toFixed(1),
      };
      for (const output of outputs) {
        output.textContent = values[output.dataset.scoringResult];
      }
      results.hidden = false;
      feedback.textContent = outputs.map((output) => output.previousElementSibling.textContent + " " + output.textContent).join(". ") + ".";
    });

    form.addEventListener("change", clearResults);
    form.addEventListener("reset", clearResults);
  }
})();
