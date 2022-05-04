
const createTaskHtml = (taskName, assignedTo, dueDate, taskNote) => {
  //document.getElementsByClass('cardTitle').innerHTML('task') = `This is the ${createTaskHtml}`;
  const html = `<div class="container">
  <div class="form-group">
  <!--Task Name-->
    <form action="index.html" method="GET" class="task-form">
      <label for="taskName">
      ${taskName}
    
      </label> 
    
    <input type="text" id="taskName" required>
    <br>
    
  

  <!--Assigned To-->

  
    <label for="assignedTo">
      ${assignedTo}
    </label>
    <input type="text" id="assignedTo" required>
    <br>
  
  

  <!--Due Date-->

  

    <label for="dueDate">
      ${dueDate}
    </label>
    <input type="date" id="dueDate" required>
    <br>
 

  <!--Task Notes-->
  
  

    <label for="taskNotes">
    ${description}
    </label>
    <textarea id="taskNotes" required></textarea>
    <br>
    
    <input type="submit" value="Create Task" id="createButton">
  
  </form>`

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

