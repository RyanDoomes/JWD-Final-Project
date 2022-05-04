
const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
  document.getElementsByClass('cardTitle').innerHTML('task') = `This is the ${createTaskHtml}`;
}


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

