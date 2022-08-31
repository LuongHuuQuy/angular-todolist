import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {ChildComponent} from '../child/child.component'

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss'],
})
export class Parent2Component implements OnInit {
  @Input() text: string;
  @ViewChild('rdNumber')  randomNumber:ChildComponent
  isBackgroundParent=false;
  constructor() {}
  alertText() {
    alert(this.text);
  }
  ngOnInit() {}
  clickBtnChangeBgParent(){
    // this.isBackgroundParent = !this.isBackgroundParent;
    this.randomNumber.clickParentChangeColor();
  }
  clickBtnRandom(){
    this.randomNumber.randomNumber();
  }
}
