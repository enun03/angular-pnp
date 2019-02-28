import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task';
import { TasksService } from '../../services/tasks.service';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { UpdateTaskModalComponent } from './update-task-modal/update-task-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  tasks: Task[];
  faTrashAlt = faTrashAlt; // FontAwesome icon

  constructor(
    private tasksService: TasksService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.blockUI.start();
    // consume task service
    this.tasksService.getTasks()
      .then((items: Task[]) => {
        this.tasks = items;
        this.blockUI.stop();
      })
      .catch(err => {
        console.log(err);
        this.blockUI.stop();
      });
  }

  deleteTask(task: Task, i: any) {
    this.blockUI.start();
    this.tasksService.deleteTask(task)
      .then(res => {
        this.tasks.splice(i, 1); // delete task from tasks array
        console.log(`Task Id:${task.ID} was deleted..`, res);
        this.blockUI.stop();
      })
      .catch(err => {
        console.log(err);
        this.blockUI.stop();
        throw err;
      });
  }

  open(task: Task): void {
    const modalRef = this.modalService.open(UpdateTaskModalComponent);
    modalRef.componentInstance.task = task;
  }

  log(task: Task): void {
    console.log(task);
  }
}
