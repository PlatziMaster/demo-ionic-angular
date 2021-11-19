import { TestBed } from '@angular/core/testing';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a task', () => {
    // Arrange
    const name = 'nuevo';
    // Act
    service.addTask(name);
    const tasks = service.getAll();
    // Assert
    expect(tasks.some(item => item.name === name)).toBeTrue();
  });

  it('should not allow add an empty name', () => {
    try {
      const name = '';
      service.addTask(name);
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
