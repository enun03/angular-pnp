import { Injectable } from '@angular/core';

import { sp } from '@pnp/sp';

@Injectable({
  providedIn: 'root'
})

export class TaskStatusOptionsService {
  list = sp.web.lists.getByTitle('ddStatusOptions');

  constructor() {
    sp.setup({
      sp: {
        headers: {
          Accept: 'application/json; odata=verbose'
        }
      }
    });
  }

  getTaskSelectOptions() {
    // get all the items from ToDo list
    return this.list.items
      .select('ID', 'Option', 'Status')
      .get();
  }
}
