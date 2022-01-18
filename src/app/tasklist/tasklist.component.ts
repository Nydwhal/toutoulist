import { Component, OnInit } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})



export class TasklistComponent implements OnInit {
  description = '';
  state = 'todo';
  taskId = 0;
  
  display = 'none';

  task!: {
    description: '';
    state: 'todo';
    taskId: 0;
  };
  tasks = new Array();

  


  changeDescription(display: string): void {
    this.display = display;
  }

  removeTask(taskId : number): void {
    document.getElementById('task'+taskId)?.remove()
  }

  addTask(): void {

    //creation of the new component
    var task = new TaskComponent()
    task.description = this.description
    task.state = "todo"
    task.taskId = this.taskId
    this.tasks.push(task)
    console.log(this.tasks);
    
    this.taskId++;
  }

  constructor() {}

  ngOnInit(): void {}
}
