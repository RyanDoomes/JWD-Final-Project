const createTaskHtml = (taskName, assignedTo, dueDate, taskNotes)=>{
const newForm = `<li class="list-group-item">
<div class="d-flex w-100 mt-2 justify-content-between align-items-center">
    <h5>${taskName}</h5>
    <span class="badge badge-danger">TODO</span>
</div>
<div class="d-flex w-100 mb-3 justify-content-between">
    <small>Assigned To:${assignedTo}</small>
    <small>Due:${dueDate}</small>
</div>
<p>${taskNotes}</p>
</li>`

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
  
  

}
