import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypeScriptDemoComponent } from './components/type-script-demo/type-script-demo.component';

@NgModule({
  //component registration goes here!
  declarations: [
    AppComponent,
    TypeScriptDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
