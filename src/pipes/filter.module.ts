import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule, FilterPipe],
  declarations: [FilterPipe],
})
export class FilterModule {}
