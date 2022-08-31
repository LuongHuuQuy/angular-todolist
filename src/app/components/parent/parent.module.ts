import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from '../child/child.component';
import { ParentComponent } from './parent.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChildComponent, ParentComponent],
  exports: [ParentComponent],
})
export class ParentModule {}
