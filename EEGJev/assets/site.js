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
