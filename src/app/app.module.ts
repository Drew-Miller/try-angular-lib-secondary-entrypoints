import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibModule } from 'my-lib';
import { MyLibTestingModule } from 'my-lib/testing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibModule, MyLibTestingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
