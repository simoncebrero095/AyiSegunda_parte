import { Injectable } from "@angular/core";
import { Task } from '../compModule/Task';


@Injectable({
  providedIn: "root",
})
export class TaskService {
  tasks: Task[];
  
  constructor() {
    this.tasks = [ 
      {title: 'white', description:'I have to write'},
      {title: 'create website', description:'I have to create website'}
         ];
   }

getTask(){
  return this.tasks;
}

addTask(task:Task){
  this.tasks.push(task)
  return false;
   
}
}
