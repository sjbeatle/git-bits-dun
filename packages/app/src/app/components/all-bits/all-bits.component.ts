import { Component, OnInit } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { timeRemaining } from '../../shared/utils';
import { ITodo } from '../../services/types';

import { TodoService } from '../../services';

@Component({
  selector: 'app-all-bits',
  templateUrl: './all-bits.component.html',
  styleUrls: ['./all-bits.component.scss']
})
export class AllBitsComponent implements OnInit {
  faSort = faSort;
  sort = 'ascending';
  isFetching = true;
  todos: ITodo[] = [];

  constructor(public todoService: TodoService) { }

  sortTodos() {
    this.sort = this.sort === 'ascending' ? 'descending' : 'ascending';
  }

  getTodos() {
    this.isFetching = true;
    this.todoService.getTodos()
      .subscribe((todos) => {
        this.isFetching = false;
        this.todos = todos;
      });
  }

  sortByDate(todos: ITodo[]) {
    return todos.sort((a, b) => {
      const dateA = new Date(a.createdDate);
      const dateB = new Date(b.createdDate);
      const sort = this.sort === 'ascending'
        ? dateA > dateB
        : dateA < dateB;

      return sort
        ? -1
        : 1;
    });
  }

  get buttonLabel() {
    return `Sort bits by date ${this.sort}`;
  }

  get priorityTodos() {
    return this.sortByDate(
      this.todoService.todos
        .filter(todo => {
          const time = timeRemaining(todo);
          return time <= 0 && todo.priority === true;
        }),
    );
  }

  get normalTodos() {
    return this.sortByDate(
      this.todoService.todos
        .filter(todo => {
          const time = timeRemaining(todo);
          return time <= 0 && todo.priority === false;
        }),
    );
  }

  ngOnInit() {
    this.getTodos();
  }

}
