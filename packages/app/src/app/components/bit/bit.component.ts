import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/services/types';
import { faCircle as faCircleO, faFlag as faFlagO } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faCalendarDay, faFlag } from '@fortawesome/free-solid-svg-icons';

import { TodoService } from '../../services';

@Component({
  selector: 'app-bit',
  templateUrl: './bit.component.html',
  styleUrls: ['./bit.component.scss']
})
export class BitComponent implements OnInit {
  @Input() todo: ITodo;
  @Input() showFlag = true;
  isDeleting = false;
  isReprioritizing = false;
  faFlag = faFlag;
  faFlagO = faFlagO;
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

  setPriorty() {
    this.isReprioritizing = true;
    this.todoService.updatePriority(this.todo._id, !this.priority)
      .subscribe(() => {
        this.isReprioritizing = false;
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
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }

  get circle() {
    return this.isDeleting ? this.faCircle : this.faCircleO;
  }

  get flag() {
    return this.priority ? this.faFlag : this.faFlagO;
  }

  get flagAriaLabel() {
    return this.priority
      ? 'Remove bit from priority list'
      : 'Move bit to the priority list';
  }

  ngOnInit() {
  }

}
