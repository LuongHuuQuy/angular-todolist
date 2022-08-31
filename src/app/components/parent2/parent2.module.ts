import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildModule } from '../child/child.module'
import {Parent2Component} from './parent2.component'

@NgModule({
  imports: [
    CommonModule, ChildModule
  ],
  declarations: [Parent2Component],
  exports: [Parent2Component],
})
export class Parent2Module { }