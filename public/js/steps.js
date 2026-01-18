
let stepIndex = 0;

const container = document.getElementById("steps-container");
const addStepBtn = document.getElementById("add-step");

addStepBtn.addEventListener("click", () => {
  const stepDiv = document.createElement("div");
  stepDiv.className = "step";

  const label = document.createElement("label");
  label.textContent = `Step ${stepIndex + 1}`;

  const input = document.createElement("input");
  input.type = "text";
  input.name = `steps[${stepIndex}][instruction]`;
  input.required = true;

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-step";

  removeBtn.addEventListener("click", () => {
    stepDiv.remove();
    updateStepLabels();
  });

  stepDiv.append(label, input, removeBtn);
  container.appendChild(stepDiv);

  stepIndex++;
});

function updateStepLabels() {
  const steps = container.querySelectorAll(".step");

  steps.forEach((step, index) => {
    step.querySelector("label").textContent = `Step ${index + 1}`;
    step.querySelector("input").name = `steps[${index}][instruction]`;
  });

  stepIndex = steps.length;
}
