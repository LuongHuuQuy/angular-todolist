import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-detail',
  templateUrl: './todo-list-detail.component.html',
  styleUrls: ['./todo-list-detail.component.scss'],
})
export class TodoListDetailComponent implements OnInit {
  @Input() childMessage: string;

  @Output() eventParent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  callEvent() {
    console.log('dsfasf')
    this.eventParent.emit({ name: 'asdfasfasf' });
  }
}
