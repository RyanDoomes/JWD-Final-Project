const createTaskHtml = (id, taskName, assignedTo, dueDate, taskNotes, status)=>{
const newForm = `

<div class="card" style="width: 22rem;">
  <div class="card-body">
    <h5 class="card-title">Task Name:  ${taskName}</h5>
    <br>
    <h6 class="card-subtitle mb-2 text-muted" id="assignedToInput">Assignee:  ${assignedTo}</h6>
    <br>
    <h6 class="card-subtitle mb-2 text-muted">Due Date:  ${dueDate}</h6>
    <br>
    <p class="card-subtitle mb-2 text-muted">Task Notes:  ${taskNotes}</p>
    <br>
    <h6 class="card-subtitle mb-2 text-muted">Status:  ${status}</h6>
    <br>
     <div class="row">
      <div class="col">
        <a href="#" class="btn btn-primary">Delete</a>
      </div>
      <div class="col">
        <a href="#" class="btn btn-primary done-button">Mark as done</a>
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
    this.status = "To do";

  }
  addTask(taskName, assignedTo, dueDate, taskNotes, status){
    const task = {
      id: this.currentId++,
      taskName: taskName,
      assignedTo: assignedTo,
      dueDate: dueDate,
      taskNotes: taskNotes,
      status: status,
    };
  
  this.tasks.push(task);
  }
  
  render(){
   
    const tasksHtmlList = [];

    for(let i = 0; i < this.tasks.length; i++){
      const task = this.tasks[i];

      const date = new Date(task.dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

      const taskHtml = createTaskHtml(task.id, task.taskName, task.assignedTo, formattedDate, task.taskNotes, task.status);

      tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join('\n');

    const tasksList = document.querySelector('#tasksList');
    tasksList.innerHTML = tasksHtml;

  

  }
  

}
