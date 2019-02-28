import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';

import { TaskStatusSelectOption } from '../../models/task-status-select-option';
import { TaskStatusOptionsService } from '../../services/task-status-options.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  task: Task = new Task();
  taskStatusSelectOptions: TaskStatusSelectOption[];

  submitted = false; // Init form status

  constructor(
    private router: Router,
    private tasksService: TasksService,
    private taskStatusOptionsService: TaskStatusOptionsService
  ) { }

  ngOnInit() {
    this.getStatusSelectOptions();
  }

  onSubmit() { this.submitted = true; }

  getStatusSelectOptions() {
    this.blockUI.start();
    this.taskStatusOptionsService.getTaskSelectOptions()
      .then(options => {
        this.taskStatusSelectOptions = options.filter(opt => opt.Status !== 'Inactive');
        console.log(this.taskStatusSelectOptions);
        this.blockUI.stop();
      })
      .catch(err => {
        console.log(err);
        this.blockUI.stop();
        throw err;
      });
  }

  addTask(): void {
    this.tasksService.addTask(this.task)
      .then(res => {
        console.log('New Task Added', res);
        this.navigateTo('');
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  logTask() {
    console.log(this.task);
  }

}
