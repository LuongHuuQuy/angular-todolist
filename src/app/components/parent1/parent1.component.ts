import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
  @Input() text:string
  // @ViewChild('rdNumber') RandomNumber:ElementRef
  isBackgroundParent= false;
  constructor() { }

  ngOnInit() {
  }
  alertText(){
    alert(this.text);
  }
  clickBtnChangeBgParent(){
    this.isBackgroundParent = !this.isBackgroundParent;
  }
  clickBtnRandom(){

  }
}