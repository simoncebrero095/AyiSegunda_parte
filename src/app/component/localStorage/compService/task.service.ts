import { Injectable } from "@angular/core";
import { Task } from "../compModule/Task";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  tasks: Task[];

  constructor() {
    this.tasks = [
      { title: "white", description: "I have to write", hide: true },
      { title: "create website",description: "I have to create website",hide: true,
      },];}

  getTask() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    return false;
  }
  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
      }
    }
  }
}
