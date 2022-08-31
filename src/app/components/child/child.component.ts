import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() shape : string
  @Output() callParent = new EventEmitter(); 
  number=0;
  isColor=false;
  constructor() { }

  ngOnInit() {
  }
  clickItemShowParentText(){
    this.callParent.emit();
  }
  clickParentChangeColor(){
    this.isColor = !this.isColor;
  }
  randomNumber(){
    this.number= Math.floor(Math.random()*100);
  }
}