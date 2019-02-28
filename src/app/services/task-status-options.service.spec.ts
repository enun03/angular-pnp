import { TestBed } from '@angular/core/testing';

import { TaskStatusOptionsService } from './task-status-options.service';

describe('TaskStatusOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskStatusOptionsService = TestBed.get(TaskStatusOptionsService);
    expect(service).toBeTruthy();
  });
});
