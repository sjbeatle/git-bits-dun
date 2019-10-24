import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { last, catchError } from 'rxjs/operators';
import { Logger } from './logger.service';
import { MessageService } from './message.service';
import { ITodo } from './types';
import { TODOS } from './mocks';

const config = {
  endpoint: 'http://localhost:5000/todos',
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(
    private logger: Logger,
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

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
    return this.http.delete(config.endpoint)
      .pipe(
        last(() => {
          this.messageService.add('Delete all success!', 'success');
          return true;
        }),
        catchError(() => {
          const message = 'Delete all error!';
          this.messageService.add(message, 'error');
          return throwError(message);
        }),
      );
  }

  deleteTodo(id: string): Observable<any> {
    this.logger.log(`Deleting todo: ${id} ...`);
    return this.http.delete(`${config.endpoint}/$id`);
  }
}