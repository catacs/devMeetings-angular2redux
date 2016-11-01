import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

// Importar angular material
import {MaterialModule} from '@angular/material'

// 2. No olvides importarlo
import {FormsModule} from '@angular/forms'

// 2/ Importamos StoreModule y nuestro reducer principal
import { StoreModule } from '@ngrx/store'
import { reducer } from './reducers/reducer'

// Importamos modulos necesarios
import { Routes, RouterModule } from '@angular/router'

import { App } from './components/app/app'
import { GroceriesContainer } from './components/groceries/groceries'
import { ListComponent } from './components/list/list'
import { GroceriesDetailComponent } from './components/grocerie-details/grocerie-details'
import { ListItemComponent } from './components/item/item'

// 7/ Definimos rutas
const routes: Routes = [
  { path: '', component: GroceriesContainer },
  { path: 'details/:id', component: GroceriesDetailComponent },
  // Podemos definir rutas por defecto
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule.forRoot(),
    // Iniciamos nuestra store y definimos nuestro state principal
    StoreModule.provideStore({ lists: reducer }),
    // Inicializar rutas
    RouterModule.forRoot(routes)
  ],

  declarations: [
    App,
    GroceriesContainer,
    ListComponent,
    ListItemComponent,
    GroceriesDetailComponent
  ],
  bootstrap: [ App ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {}