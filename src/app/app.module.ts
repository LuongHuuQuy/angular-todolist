import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {Parent1Module} from './components/parent1/parent1.module'
import {Parent2Module} from './components/parent2/parent2.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule,Parent1Module, Parent2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
