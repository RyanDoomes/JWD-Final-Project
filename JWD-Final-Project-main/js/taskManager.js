
const createTaskHtml = (taskName, assignedTo, dueDate, taskNote) => {
  //document.getElementsByClass('cardTitle').innerHTML('task') = `This is the ${createTaskHtml}`;
  const html = `<div class="card" style="width: 22rem;">
  <div class="card-body">
    <h5 class="card-title">${taskName}</h5>
    <br>
    <h6 class="card-subtitle mb-2 text-muted">${assignedTo}</h6>
    <br>
    <h6 class="card-subtitle mb-2 text-muted">${dueDate}</h6>
    <br>
    <h6 class="card-subtitle mb-2 text-muted">${taskNote}</h6>
    
    <p class="card-text">Task notes will be entered here.</p>
   <div class="row">
    <div class="col">
    <a href="#" class="btn btn-primary">Delete</a>
    </div>
  <div class="col">
    <a href="#" class="btn btn-primary">Mark as done</a>
  </div>
  </div>
  </div>`
return html} 


class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate){
      const task = {
        id: this.currentId++,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: 'TO DO'
      };

    

    this.tasks.push(task);
    }
  }

