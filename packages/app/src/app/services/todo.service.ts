import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { last, catchError, map } from 'rxjs/operators';
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
  todos: ITodo[] = [];

  constructor(
    private logger: Logger,
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  addTodo(todo: ITodo): Observable<ITodo> {
    this.logger.log('Adding todo ...');
    return this.http.post<ITodo>(config.endpoint, todo)
      .pipe(
        last((payload) => {
          const bit = payload.todo;
          this.todos.push({
            todo: decodeURI(payload.todo),
            createdDate: payload.createdDate,
            updatedDate: payload.updatedDate,
            priority: payload.priority,
            _id: payload._id,
          });
          return true;
        }),
        catchError(() => {
          const message = 'Add bit error!';
          this.messageService.add(message, 'error');
          return throwError(message);
        }),
      );
  }

  getTodos(): Observable<ITodo[]> {
    this.logger.log('Getting todos ...');
    return this.http.get<ITodo[]>(config.endpoint)
      .pipe(
        last((todos) => {
          const todosMapped: ITodo[] = todos.map(item => {
            const {
              todo,
              createdDate,
              updatedDate,
              _id,
              priority,
            } = item;

            return {
              createdDate,
              updatedDate,
              _id,
              priority,
              todo: decodeURI(todo),
            };
          });

          this.todos = todosMapped;
          return true;
        }),
        catchError(() => {
          const message = 'Error loading bits!';
          this.messageService.add(message, 'error');
          return throwError(message);
        }),
      );
  }

  deleteTodos(): Observable<any> {
    this.logger.log('Deleting ALL todos ...');
    return this.http.delete(config.endpoint)
      .pipe(
        last(() => {
          this.messageService.add('Delete all success!', 'success');
          this.todos = [];
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
    return this.http.delete(`${config.endpoint}/${id}`)
      .pipe(
        last(() => {
          this.todos = this.todos.filter(todo => todo._id !== id);
          return true;
        }),
        catchError(() => {
          const message = 'Delete bit error!';
          this.messageService.add(message, 'error');
          return throwError(message);
        }),
      );
  }

  updateTodo(todo: ITodo): Observable<any> {
    this.logger.log('Updating todos ...');
    return this.http.put(`${config.endpoint}/${todo._id}`, todo)
      .pipe(
        last(() => {
          const newTodos = this.todos.map(item => {
            if (item._id === todo._id) {
              item = todo;
            }

            return item;
          });
          this.todos = newTodos;
          return true;
        }),
        catchError(() => {
          const message = 'Update error!';
          this.messageService.add(message, 'error');
          return throwError(message);
        }),
      );
  }

  updatePriority(id: string, priority: boolean) {
    let todo: ITodo;

    this.todos.some(item => {
      if (item._id === id) {
        todo = item;
        todo.priority = priority;
        return true;
      }
    });

    return this.updateTodo(todo);
  }
}
