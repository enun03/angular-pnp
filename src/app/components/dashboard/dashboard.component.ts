import { Component, OnInit } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  ListItems: any[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getListItems();
  }

  getListItems(): void {
    this.blockUI.start();
    // consume task service
    this.tasksService.getListItems()
      .then((items: any[]) => {
        console.log(items);
        this.ListItems = items;
        this.blockUI.stop();
      })
      .catch(err => {
        console.log(err);
        this.blockUI.stop();
      });
  }
}
