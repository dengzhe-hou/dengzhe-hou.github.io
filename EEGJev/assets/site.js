const benchCard = document.querySelector(".bench-card");
const trackButtons = benchCard.querySelectorAll("[data-track-view]");
const trackValues = [...document.querySelectorAll("[data-metric]")].map((cell) => ({
  cell,
  tasks: cell.textContent,
  metrics: cell.dataset.metric,
}));

for (const button of trackButtons) {
  button.addEventListener("click", () => {
    const view = button.dataset.trackView;
    benchCard.dataset.view = view;
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
