import { Component, OnInit, Input } from '@angular/core';
import { randomId } from '../../shared/utils';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
  isDeleting = false;

  constructor(private todoService: TodoService) { }

  deleteTodos() {
    this.isDeleting = true;
    this.todoService.deleteTodos()
      .subscribe(() => {
        this.isDeleting = false;
      });
  }

  ngOnInit() { }
}
