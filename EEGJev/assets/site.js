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

for (const tablist of document.querySelectorAll("[data-demo-tabs]")) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute("aria-controls")));

  function selectTab(index, moveFocus) {
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      panels[i].hidden = !active;
    });
    if (moveFocus) tabs[index].focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(index, false));
    tab.addEventListener("keydown", (event) => {
      let nextIndex;
      switch (event.key) {
        case "ArrowLeft": nextIndex = (index - 1 + tabs.length) % tabs.length; break;
        case "ArrowRight": nextIndex = (index + 1) % tabs.length; break;
        case "Home": nextIndex = 0; break;
        case "End": nextIndex = tabs.length - 1; break;
        default: return;
      }
      event.preventDefault();
      selectTab(nextIndex, true);
    });
  });
}
