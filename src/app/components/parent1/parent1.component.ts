import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss'],
})
export class Parent1Component implements OnInit {
  @Input() text: string;
  @ViewChild('bgchild') bgChildComponent: ChildComponent;
  @ViewChild('rdNumber') randomNumber: ChildComponent;

  isBackgroundParent = false;
  constructor() {}

  ngOnInit() {}
  alertText() {
    alert(this.text);
  }
  clickBtnChangeBgParent() {
    this.bgChildComponent.clickParentChangeColor();
  }
  clickBtnRandom() {
    this.randomNumber.randomNumber();
  }
}
