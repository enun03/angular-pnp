import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  task: Task = new Task();

  submitted = false; // Init form status

  constructor(
    private router: Router,
    private tasksService: TasksService
  ) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

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
