import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})

export class TaskComponent implements OnInit {
  @Input() taskId = 0;
  @Input() description = '';

  state = 'todo';

  changeState(): void {
    this.state == 'todo' ? (this.state = 'done') : (this.state = 'todo');
    console.log('State :' + this.state);
  }

  constructor() {
    this.description
    this.state
    this.taskId
  }

  ngOnInit(): void {}
}
