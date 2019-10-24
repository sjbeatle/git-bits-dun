import { Component, OnInit } from '@angular/core';
import { faSort } from '@fortawesome/free-solid-svg-icons';
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
    console.log('>> TESTING >> sort me!');
  }

  getTodos() {
    this.isFetching = true;
    this.todoService.getTodos()
      .subscribe((todos) => {
        this.isFetching = false;
        this.todos = todos;
        console.log('>> TESTING >> todos', todos);
      });
  }

  get buttonLabel() {
    return `Sort bits by date ${this.sort}`;
  }

  ngOnInit() {
    this.getTodos();
  }

}
