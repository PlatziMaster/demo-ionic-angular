import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

interface Task {
  name: string;
  title: string;
  completed: boolean;
  id: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  getOne(id: Task['id']) {
    return this.http.post<Task>(`https://jsonplaceholder.typicode.com/todos/${id}`, {})
    .pipe(
      map(response => ({
        ...response,
        name: response.title,
      }))
    );
  }
}
