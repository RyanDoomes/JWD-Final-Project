class TaskManager {
  constructor(currentId = 0) {
    this._tasks = [];
    this._currentId = currentId;
  }
  addTask(taskName, assignedTo, dueDate, taskNotes){
    this.currentId++;
    return this._tasks.push( this._currentId, taskName, assignedTo, dueDate, taskNotes);
  }
  
  

}
