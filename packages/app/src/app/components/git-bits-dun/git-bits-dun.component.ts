import { Component, OnInit, OnDestroy } from '@angular/core';
import { timeRemaining } from '../../shared/utils';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

import { TodoService } from '../../services';
import { ITodo } from 'src/app/services/types';

let timer;

@Component({
  selector: 'app-git-bits-dun',
  templateUrl: './git-bits-dun.component.html',
  styleUrls: ['./git-bits-dun.component.scss']
})
export class GitBitsDunComponent implements OnInit {
  faStopwatch = faStopwatch;
  timeRemaining: number;
  disabled = false;
  timer: string;

  constructor(private todoService: TodoService) { }

  gitBitDun() {
    const randomIndex = Math.floor(Math.random() * this.todosCount);

    this.disabled = true;
    this.todoService.updateTodoTimer(randomIndex)
      .subscribe(() => {
        this.disabled = false;
      });
  }

  get todosCount() {
    return this.todoService.todos.length;
  }

  get doBit() {
    let bit: ITodo;

    this.todoService.todos.some((todo) => {
      const time = timeRemaining(todo);
      if (time > 0) {
        this.timeRemaining = time;
        bit = todo;
        return true;
      }
    });

    return bit;
  }

  calcTimer(time: number) {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  clearTimer() {
    if (timer) {
      clearInterval(timer);
    }
  }

  ngOnInit() {
    timer = setInterval(() => {
      if (this.timeRemaining && !isNaN(this.timeRemaining)) {
        this.timer = this.calcTimer(this.timeRemaining);
      }

      if (this.timeRemaining < 0) {
        this.clearTimer();
      }
    }, 1000);
  }
}
