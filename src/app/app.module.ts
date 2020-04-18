import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/localStorage/compStorage/navigation/navigation.component';
import { TaskComponent } from './component/localStorage/compStorage/task/task.component';
import { TaskFormComponent } from './component/localStorage/compStorage/task-form/task-form.component';
import { TaskListComponent } from './component/localStorage/compStorage/task-list/task-list.component';
import { TaskService } from './component/localStorage/compService/task.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskComponent,
    TaskFormComponent,
    TaskListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
