import { Component, OnInit, Input } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Task } from '../../../models/task';
import { TasksService } from '../../../services/tasks.service';

@Component({
  selector: 'app-update-task-modal',
  templateUrl: './update-task-modal.component.html',
  styleUrls: ['./update-task-modal.component.css']
})

export class UpdateTaskModalComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @Input() task: Task;

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public tasksService: TasksService
  ) { }

  ngOnInit() {
  }

  updateTask(task: Task) {
    this.blockUI.start();
    this.tasksService.updateTask(task)
      .then(res => {
        console.log(`Task ID: ${task.ID} was updated..`, res);
        this.close();
        this.blockUI.stop();
      })
      .catch(err => {
        console.log(err);
        this.blockUI.stop();
        throw err;
      });
  }

  close() {
    const modalRef = this.modalService.dismissAll();
  }

}
