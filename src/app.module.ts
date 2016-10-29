import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

// Importar angular material
import {MaterialModule} from '@angular/material'

// 2. No olvides importarlo
import {FormsModule} from '@angular/forms'

// 2/ Importamos StoreModule y nuestro reducer principal
import { StoreModule } from '@ngrx/store'
import { reducer } from './reducer'

import {App} from './components/app/app'
import {GroceriesContainer} from './components/groceries/groceries'
import {ListComponent} from './components/list/list'


@NgModule({
  // 4/ 1. Lo primero es añadir FormsModule
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    // Iniciamos nuestra store y definimos nuestro state principal
    StoreModule.provideStore({ lists: reducer })
  ],

  declarations: [
    App,
    GroceriesContainer,
    ListComponent
  ],
  bootstrap: [ App ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}