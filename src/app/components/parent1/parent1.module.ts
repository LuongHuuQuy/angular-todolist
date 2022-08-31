import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildModule } from '../child/child.module'
import {Parent1Component} from './parent1.component'

@NgModule({
  imports: [
    CommonModule, ChildModule
  ],
  declarations: [Parent1Component],
  exports: [Parent1Component]
})
export class Parent1Module { 
  
}