import { Component, OnInit,Input } from '@angular/core';
import {Task} from '../../compModule/Task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
