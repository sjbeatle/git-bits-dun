import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Logger } from './logger.service';
import { ITodo } from './types';
import { TODOS } from './mocks';

const config = {
  endpoint: 'http://localhost:5000/todos',
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private logger: Logger, private http: HttpClient) { }

  addTodo(todo: ITodo): Observable<ITodo> {
    this.logger.log('Adding todo ...');
    return this.http.post<ITodo>(config.endpoint, todo);
  }

  getTodos(): Observable<ITodo[]> {
    this.logger.log('Getting todos ...');
    return this.http.get<ITodo[]>(config.endpoint);
  }

  deleteTodos(): Observable<any> {
    this.logger.log('Deleting ALL todos ...');
    return this.http.delete(config.endpoint);
  }

  deleteTodo(id: string): Observable<any> {
    this.logger.log(`Deleting todo: ${id} ...`);
    return this.http.delete(`${config.endpoint}/$id`);
  }
}
