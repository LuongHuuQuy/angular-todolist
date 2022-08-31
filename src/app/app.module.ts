import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentModule} from './components/parent/parent.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule,ParentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
