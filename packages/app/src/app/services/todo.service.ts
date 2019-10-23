import { Injectable } from '@angular/core';
import { TODOS } from './mocks';
import { ITodo } from './types';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTodos(): ITodo[] {
    return TODOS;
  }
}
