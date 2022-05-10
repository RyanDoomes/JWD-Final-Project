
let taskManager = new TaskManager;

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

taskManager.addTask (taskName, assignedTo, dueDate, description, status);
taskManager.render();


});
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

const tasksList = document.querySelector('#tasksList');
tasksList.addEventListener('click', (event) => { 

    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';

        
     //   taskManager.save();

        taskManager.render();
    }

    
    
});