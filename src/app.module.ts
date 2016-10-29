import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {App} from './components/app/app';

@NgModule({
  imports: [ BrowserModule ], // Modules
  declarations: [ App ], // Components
  bootstrap: [ App ] // Root component
})

export class AppModule{}