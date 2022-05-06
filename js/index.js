let task1 = new TaskManager;

const newTaskForm = document.querySelector('.task-form');

newTaskForm.addEventListener('submit', (event) => {

    event.preventDefault();


const newTaskNameInput = document.querySelector('#taskName');
const newTaskAssignedTo = document.querySelector('#assignedTo');
const newTaskDueDate = document.querySelector('#dueDate');
const newTaskDescription = document.querySelector('#taskNotes');

//validation info
const taskName = newTaskNameInput.value; 
const assignedTo = newTaskAssignedTo.value;
const dueDate = newTaskDueDate.value;
const description = newTaskDescription.value;

task1.addTask (taskName, assignedTo, dueDate, description);


})
/*
if(!validFormFieldInput(taskName)){
    errorMessage.innerHTML = "Invalid name input";
    errorMessage.style.display = "block"
}else{
    errorMessage.style.display = "none"
}
});
*/
function validFormFieldInput(data){
return data !== null && data !== '';
}

const taskHtml = createTaskHtml("Laundry", "Chen", "11-20-2022", "Separate the colors");
console.log(taskHtml)