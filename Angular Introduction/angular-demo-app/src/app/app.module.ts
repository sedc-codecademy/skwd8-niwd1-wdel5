import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypeScriptDemoComponent } from './components/type-script-demo/type-script-demo.component';
import { DemoComponent } from './components/demo-component/demo.component';
import { DemoChildComponent } from './components/demo-child-component/demo-child.component';

@NgModule({
  //component registration goes here!
  declarations: [
    AppComponent,
    TypeScriptDemoComponent,
    DemoComponent,
    DemoChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
