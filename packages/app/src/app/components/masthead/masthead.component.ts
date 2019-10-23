import { Component, OnInit, Input } from '@angular/core';
import { randomId } from '../../shared/utils';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { ITodo } from '../../services/types';
import { TodoService } from '../../services';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  @Input() appTitle: string;
  ariaId = randomId();
  faTrashAlt = faTrashAlt;
  todos: ITodo[];

  constructor(todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  ngOnInit() {
    console.log(this.todos);
  }
}
