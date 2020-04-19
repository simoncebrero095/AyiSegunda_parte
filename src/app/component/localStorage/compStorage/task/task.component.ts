import { Component, OnInit,Input } from '@angular/core';
import {Task} from '../../compModule/Task';
import { TaskService } from '../../compService/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
}) 
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor( public taskService: TaskService ) { }

  ngOnInit(): void {
  }

deleteTask(task:Task){
  if(confirm("Are you sure you want to delete it?")){
    this.taskService.deleteTask(task);
  }
  

}

}
