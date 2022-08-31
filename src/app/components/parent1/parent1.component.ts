import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss'],
})
export class Parent1Component implements OnInit {
  @Input() text: string;
  @ViewChild('bgchild') bgChild: ElementRef;
  isBackgroundParent = false;
  constructor() {}

  ngOnInit() {}
  alertText() {
    alert(this.text);
  }
  clickBtnChangeBgParent() {
    // this.isBackgroundParent = !this.isBackgroundParent;
    // this.bgChild.nativeElement.
  }
  clickBtnRandom() {}
}
