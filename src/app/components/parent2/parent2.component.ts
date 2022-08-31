import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss'],
})
export class Parent2Component implements OnInit {
  @Input() text: string;
  isBackgroundParent=false;
  constructor() {}
  alertText() {
    alert(this.text);
  }
  ngOnInit() {}
  clickBtnChangeBgParent(){
    this.isBackgroundParent = !this.isBackgroundParent;
  }
  clickBtnRandom(){
    
  }
}
