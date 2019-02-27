import { Injectable } from '@angular/core';

import { sp } from '@pnp/sp';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  getListItems() {
    // get all the items from a list
    return sp.web.lists.getByTitle('ToDo').items
      .select('ID', 'Title', 'Status')
      .get();
  }
}
