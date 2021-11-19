import { Injectable } from '@angular/core';

interface Task {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Task[] = [];

  constructor() { }

  addTask(name: string) {
    if (name.length === 0) {
      throw new Error("Empty string");
    } else {
      this.tasks.push({
        name,
        completed: false
      });
    }
  }

  getAll() {
    return this.tasks;
  }
}
