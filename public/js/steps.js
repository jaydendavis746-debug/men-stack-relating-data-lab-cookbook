
let stepIndex= 1
const container = document.querySelector('#steps-container')
const addStepBtn = document.getElementById('add-step')

addStepBtn.addEventListener('click',()=>{

    console.log('hello')
    const stepDiv = document.createElement('div')
    stepDiv.className='step'
    const label = document.createElement('label');
    const input = document.createElement('input');
    const removeBtn = document.createElement('button')

    label.textContent = `Step ${stepIndex +1}:`
    input.type = 'text';
    input.name = `steps[${stepIndex}][instruction]`
    input.required = true;

    removeBtn.type='button'
    removeBtn.textContent= 'Remove step'
    removeBtn.className = 'remove-step'


    stepDiv.append(label, input, removeBtn);
    container.appendChild(stepDiv);
    stepIndex++;


     removeBtn.addEventListener('click', ()=> {
    stepDiv.remove();
    updateStepLabels()
})
   

})

const updateStepLabels = () => {
    const steps = container.querySelectorAll(".step");
    steps.forEach((step, index) => {
        const label = step.querySelector("label");
        const input = step.querySelector("input");
        label.textContent = `Step ${index + 1}`;
        input.name = `steps[${index}][instruction]`;
    });
    stepIndex = steps.length;
};



