import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StylingDirective } from './styling.directive';
import { StylingWihRendererDirective } from './styling-wih-renderer.directive';

@NgModule({
  declarations: [
    AppComponent,
    StylingDirective,
    StylingWihRendererDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
