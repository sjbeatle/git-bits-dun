import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { timeRemaining } from '../../shared/utils';
import { ITodo } from 'src/app/services/types';

import { TodoService } from '../../services';

let timer;
let buffer = 0;

@Component({
  selector: 'app-git-bits-dun',
  templateUrl: './git-bits-dun.component.html',
  styleUrls: ['./git-bits-dun.component.scss']
})
export class GitBitsDunComponent implements OnInit {
  @Input() todo: ITodo;
  faStopwatch = faStopwatch;
  timeRemaining: number;
  disabled = false;
  timer = 'Calculating...';

  constructor(private todoService: TodoService) { }

  gitBitDun() {
    const randomIndex = Math.floor(Math.random() * this.todosCount);

    this.disabled = true;
    this.todoService.updateTodoTimer(randomIndex)
      .subscribe(() => {
        this.disabled = false;
        this.startTimer();
      });
  }

  get todosCount() {
    return this.todoService.todos.length;
  }

  timerDisplay(time: number) {
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  clearTimer() {
    if (timer) {
      this.timer = '30:00';
      clearInterval(timer);
    }
  }

  startTimer() {
    this.clearTimer();
    timer = setInterval(() => {
      const time = timeRemaining(this.todo && this.todo.timer);
      buffer += 1;

      if (time <= 0 && buffer >= 3) {
        this.clearTimer();
      } else if (time > 0) {
        this.timer = this.timerDisplay(time);
      }
    }, 1000);
  }

  ngOnInit() {
    this.startTimer();
  }

  OnDestroy() {
    this.clearTimer();
  }
}
