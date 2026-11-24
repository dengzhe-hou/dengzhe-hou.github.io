(() => {
  const section = document.querySelector("#decision-reliability");
  if (!section) return;

  function select(buttons, selected) {
    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(button === selected));
    }
  }

  const topics = section.querySelectorAll("[data-rel-topic]");
  const answers = section.querySelectorAll("[data-rel-answer]");
  const question = section.querySelector("[data-rel-question]");
  const questionFeedback = section.querySelector("[data-rel-question-feedback]");
  const examples = {
    expression: {
      question: "Which expression was on the face shown?",
      expected: "fearful",
      label: "fearful",
      attribute: "a facial expression",
    },
    hand: {
      question: "Which hand was the participant instructed to respond with in this block?",
      expected: "left",
      label: "left hand",
      attribute: "a response hand",
    },
  };

  let topic = examples.expression;
  for (const button of topics) {
    button.addEventListener("click", () => {
      topic = examples[button.dataset.relTopic];
      select(topics, button);
      select(answers, null);
      question.textContent = topic.question;
      questionFeedback.textContent = "Choose an option from the same list.";
      delete questionFeedback.dataset.state;
    });
  }
  for (const button of answers) {
    button.addEventListener("click", () => {
      select(answers, button);
      const label = button.dataset.relAnswer;
      const correct = label === topic.expected;
      const isHand = label === "left" || label === "right";
      const matchesAttribute = isHand === (topic === examples.hand);
      questionFeedback.dataset.state = correct ? "correct" : "incorrect";
      if (correct) {
        questionFeedback.textContent = "Correct attribute and answer.";
      } else if (matchesAttribute) {
        questionFeedback.textContent = "Right attribute. The expected answer is " + topic.label + ".";
      } else {
        questionFeedback.textContent = "This question asks for " + topic.attribute + ". The expected answer is " + topic.label + ".";
      }
    });
  }

  const order = section.querySelector("[data-rel-order-options]");
  const orderFeedback = section.querySelector("[data-rel-order-feedback]");
  const orderAnswers = order.querySelectorAll("[data-rel-order-answer]");
  let current = orderAnswers[0];
  function describeOrder() {
    const position = Array.from(order.children).indexOf(current) + 1;
    orderFeedback.textContent = current.textContent + " is option " + position + ".";
  }
  for (const button of orderAnswers) {
    button.addEventListener("click", () => {
      current = button;
      select(orderAnswers, button);
      describeOrder();
    });
  }
  section.querySelector("[data-rel-swap]").addEventListener("click", () => {
    order.prepend(order.lastElementChild);
    describeOrder();
  });

  for (const card of section.querySelectorAll("[data-rel-case]")) {
    const buttons = card.querySelectorAll("[data-rel-response]");
    const feedback = card.querySelector("[data-rel-case-feedback]");
    const requiresDecline = card.dataset.expected === "decline";
    for (const button of buttons) {
      button.addEventListener("click", () => {
        select(buttons, button);
        const correct = button.dataset.relResponse === card.dataset.expected;
        feedback.dataset.state = correct ? "correct" : "incorrect";
        if (requiresDecline) {
          feedback.textContent = correct
            ? "Correct. Decline because “fearful” is missing."
            : "The correct answer is missing. The expected response is to decline.";
        } else {
          feedback.textContent = correct
            ? "Correct. Answer “fearful” because it is offered."
            : "The correct answer is offered. The expected response is “fearful”.";
        }
      });
    }
  }
})();
