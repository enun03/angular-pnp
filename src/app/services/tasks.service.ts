import { Injectable } from '@angular/core';

import { sp } from '@pnp/sp';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  list = sp.web.lists.getByTitle('ToDo');

  constructor() {
    sp.setup({
      sp: {
        headers: {
          Accept: 'application/json; odata=verbose'
        }
      }
    });
  }

  getTasks() {
    // get all the items from ToDo list
    return this.list.items
      .select('ID', 'Title', 'Status')
      .get();
  }

  getTask(id: number) {
    // get a specific item by id
    return this.list.items
      .getById(id)
      .get();
  }

  addTask(task: Task) {
    // add new item to ToDo list
    return this.list.items
      .add(task);
  }

  updateTask(task: Task) {
    // update task item in ToDo list
    return this.list.items
      .getById(task.ID)
      .update(task);
  }

  deleteTask(task: Task) {
    // delete task item from ToDo list
    return this.list.items
      .getById(task.ID)
      .delete();
  }

}
