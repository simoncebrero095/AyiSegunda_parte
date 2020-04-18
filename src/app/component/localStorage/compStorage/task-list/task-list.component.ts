import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../compService/task.service';
import { Task } from '../../compModule/Task';
 
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
Tasks : Task[];
  tasks: Task[];
  constructor(public taskService:TaskService
    ) { }

  ngOnInit() {
    this.tasks =this.taskService.getTask();
    console.log(this.Tasks)

  }

}
