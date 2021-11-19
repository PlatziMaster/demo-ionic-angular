import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TodosService } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TodosService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a task with name', () => {
    // Arrange
    const id = '1';
    const mockResponseRequest = {
      "userId": "1",
      "id": "1",
      "title": "delectus aut autem",
      "completed": false
    }
    const expectedData = {
      ...mockResponseRequest,
      name: mockResponseRequest.title
    }
    // Act
    service.getOne(id).subscribe(data => {
      // Assert
      expect(data).toEqual(expectedData);
    })

    const req = httpTestingController.expectOne(`https://jsonplaceholder.typicode.com/todos/${id}`);
    req.flush(mockResponseRequest);
    expect(req.request.method).toEqual('POST');
    httpTestingController.verify();
  });
});
