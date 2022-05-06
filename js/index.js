let task1 = new TaskManager;

const newTaskForm = document.querySelector('.task-form');

newTaskForm.addEventListener('submit', (event) => {

    event.preventDefault();


const newTaskNameInput = document.querySelector('#taskNameInput');
const newTaskAssignedTo = document.querySelector('#assignedToInput');
const newTaskDueDate = document.querySelector('#dueDateInput');
const newTaskDescription = document.querySelector('#taskNoteInput');

//validation info
const taskName = newTaskNameInput.value; 
const assignedTo = newTaskAssignedTo.value;
const dueDate = newTaskDueDate.value;
const description = newTaskDescription.value;

if(!validFormFieldInput(taskName)){
    errorMessage.innerHTML = "Invalid name input";
    errorMessage.style.display = "block"
}else{
    errorMessage.style.display = "none"
}
});

function validFormFieldInput(data){
return data !== null && data !== '';
};