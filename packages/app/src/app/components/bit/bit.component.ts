import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/services/types';
import { faCircle as faCircleO } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faCalendarDay, faFlag } from '@fortawesome/free-solid-svg-icons';

import { TodoService } from '../../services';

@Component({
  selector: 'app-bit',
  templateUrl: './bit.component.html',
  styleUrls: ['./bit.component.scss']
})
export class BitComponent implements OnInit {
  @Input() todo: ITodo;
  isDeleting = false;
  faFlag = faFlag;
  faCircle = faCircle;
  faCircleO = faCircleO;
  faCalendarDay = faCalendarDay;

  constructor(private todoService: TodoService) { }

  deleteBit() {
    this.isDeleting = true;
    this.todoService.deleteTodo(this.todoId)
      .subscribe(() => {
        this.isDeleting = false;
      });
  }

  get todoId() {
    return this.todo._id;
  }

  get priority() {
    return this.todo.priority;
  }

  get label() {
    return this.todo.todo;
  }

  get date() {
    return new Date(this.todo.createdDate).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
    });
  }

  get circle() {
    return this.isDeleting ? this.faCircle : this.faCircleO;
  }

  ngOnInit() {
  }

}
