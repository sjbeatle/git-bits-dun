import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from 'src/app/services/types';

@Component({
  selector: 'app-bit-section',
  templateUrl: './bit-section.component.html',
  styleUrls: ['./bit-section.component.scss']
})
export class BitSectionComponent implements OnInit {
  @Input() todos: ITodo[];
  @Input() title: 'string';

  constructor() { }

  ngOnInit() {
  }

}
