import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../compService/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(
      public taskService: TaskService
  ) { }

  ngOnInit(){
  }
  
  addTask(newTitle:HTMLInputElement,newDescription:HTMLInputElement){
    console.log('adding...', newTitle.value, newDescription.value);
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value
    });
    // esta imprimiendo la tareas
    //console.log(this.taskService.getTask())
    return false;
  }
 
}
