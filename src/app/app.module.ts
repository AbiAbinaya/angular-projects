import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstEditorComponent } from './first-editor/first-editor.component';
import {HeroComponent} from './hero-detail/hero-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstEditorComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
