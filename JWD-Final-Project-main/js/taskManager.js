class TaskManager {
    constructor(currentId) {
        this.tasks=[];
        this.currentId = 0;
        

    }
   
    addTask(name,description,assignedTo,dueDate,status){
        return this.currentId++;
    }
}


