
let task1 = new TaskManager;

const newTaskForm = document.querySelector('.task-form');

newTaskForm.addEventListener('submit', (event) => {

    event.preventDefault();


const newTaskNameInput = document.querySelector('#taskName');
const newTaskAssignedTo = document.querySelector('#assignedTo');
const newTaskDueDate = document.querySelector('#dueDate');
const newTaskDescription = document.querySelector('#taskNotes');
const newTaskStatus = document.querySelector('#status')

//validation info
const taskName = newTaskNameInput.value; 
const assignedTo = newTaskAssignedTo.value;
const dueDate = newTaskDueDate.value;
const description = newTaskDescription.value;
const status = newTaskStatus.value;

task1.addTask (taskName, assignedTo, dueDate, description, status);
task1.render();


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
};

/*
const taskHtml = createTaskHtml("Laundry", "Chen", "11-20-2022", "Separate the colors");*/
const changeStatus = document.querySelector('#tasksList');
changeStatus.addEventListener('click', (event) => { 
    if(event.target.)
});