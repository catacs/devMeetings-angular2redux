import {Component} from '@angular/core'
import { Store } from '@ngrx/store'
import { ADD_LIST, DELETE_LIST } from '../../reducers/reducer'

@Component({
  moduleId: __moduleName,
  selector: 'groceries',
  templateUrl: 'groceries.html'
})

export class GroceriesContainer {
  lists$
  // Definimos una lista temporal como modelo del formulario
  tempList = {}

  // Inyectamos store
  constructor(private store: Store<any>) {
    // 2/ Mediante store.select accedemos al state
    // De esta manera accedemos a la parte del state que nos interese
    this.lists$ = this.store.select(state => state.lists)
  }

  deleteList(list) {
    this.store.dispatch({ type: DELETE_LIST, payload: list })
  }

  // 8/ Añadimos la lista al array
  createList() {
    const randomId = Math.floor(Math.random() * 1000)
    const list = Object.assign({}, this.tempList, { id: randomId , items: []})
    // Usamos store.dispatch, siempre con estructure {type, payload}
    this.store.dispatch({ type: ADD_LIST, payload: list })
  }
}