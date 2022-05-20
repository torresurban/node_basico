const Task = require('../models/task');
const { saveData, getData } =require('../helpers/fileManager');

class TaskRepositorio {

    _tasks = null;

    constructor() {
        const data = getData();
        if(data){
            this._tasks = data;
        }else{
            this._tasks = [];
        }
    }

    getAllTasks() {
        return this._tasks;
    }
    /**
     * 
     * @param {String} title 
     */

    createTask(title) {
        const task = new Task(title);
        this._tasks.push(task);
        saveData(this._tasks);
        
    }

    deleteTask() {

    }

    updateTask() {

    }
}

module.exports = TaskRepositorio;