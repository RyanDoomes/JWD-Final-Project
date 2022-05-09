const createTaskHtml = (taskName, assignedTo, dueDate, taskNotes)=>{
const newForm = `

<div class="card" style="width: 22rem;">
  <div class="card-body">
    <h5 class="card-title">${taskName}</h5>
    <br>
    <h6 class="card-subtitle mb-2 text-muted" id="assignedToInput">${assignedTo}</h6>
    <br>
    <h6 class="card-subtitle mb-2 text-muted">${dueDate}</h6>
    <p class="card-subtitle mb-2 text-muted">${taskNotes}</p>
     <div class="row">
      <div class="col">
        <a href="#" class="btn btn-primary">Delete</a>
      </div>
      <div class="col">
        <a href="#" class="btn btn-primary">Mark as done</a>
      </div>
    </div>
  </div>
</div>`

return newForm

;}

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;

  }
  addTask(taskName, assignedTo, dueDate, taskNotes){
    const task = {
      id: this.currentId++,
      taskName: taskName,
      assignedTo: assignedTo,
      dueDate: dueDate,
      taskNotes: taskNotes,

    };
  
  this.tasks.push(task);
  }
  
  render(){
   
    const tasksHtmlList = [];

    for(let i = 0; i < this.tasks.length; i++){
      const task = this.tasks[i];

      const date = new Date(dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

      const taskHtml = createTaskHtml(task.id, task.taskName, task.assignedTo, formattedDate, task.taskNotes);

      tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join('\n');

    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;

  

  }
  

}
