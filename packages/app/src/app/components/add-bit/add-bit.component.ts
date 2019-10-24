import { Component, OnInit } from '@angular/core';

import { TodoService } from '../../services';

@Component({
  selector: 'app-add-bit',
  templateUrl: './add-bit.component.html',
  styleUrls: ['./add-bit.component.scss']
})
export class AddBitComponent implements OnInit {
  todo = '';
  isAdding = false;
  isBig = false;

  constructor(private todoService: TodoService) { }

  setBigBit(ev) {
    this.isBig = ev.target.checked;
  }

  addTodo() {
    let { todo } = this;
    todo = encodeURI(todo);
    this.isAdding = true;
    this.todoService.addTodo({
      todo,
      priority: this.isBig,
    })
      .subscribe(() => {
        this.todo = '';
        this.isAdding = false;
        this.isBig = false;
      });
  }

  onKey(e: KeyboardEvent) {
    if (e.keyCode === 13) { // enter key
      this.addTodo();
    } else if (e.keyCode === 27) { // escape key
      this.todo = '';
    }
  }

  get disabled() {
    return this.disallowed || this.isAdding;
  }

  get disallowed() {
    return this.todo.length < 2;
  }

  ngOnInit() {
  }

}
