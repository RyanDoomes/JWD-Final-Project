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
