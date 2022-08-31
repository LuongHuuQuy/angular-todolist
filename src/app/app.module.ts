import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {TodoListDetailComponent} from './components/todo-list-detail/todo-list-detail.component'

@NgModule({
  declarations: [AppComponent, TodoListDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [], 
  bootstrap: [AppComponent],
})
export class AppModule {}
