import { Component, OnInit, Input } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Task } from '../../../models/task';
import { TasksService } from '../../../services/tasks.service';

import { TaskStatusSelectOption } from '../../../models/task-status-select-option';
import { TaskStatusOptionsService } from '../../../services/task-status-options.service';

@Component({
  selector: 'app-update-task-modal',
  templateUrl: './update-task-modal.component.html',
  styleUrls: ['./update-task-modal.component.css']
})

export class UpdateTaskModalComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  @Input() task: Task;
  taskStatusSelectOptions: TaskStatusSelectOption[];

  submitted = false; // Init form status

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public tasksService: TasksService,
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
