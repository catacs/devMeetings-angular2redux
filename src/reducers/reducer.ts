import { Action } from '@ngrx/store'

// 4/ Definimos estado inicial
export const initialState = [
    { id: '0', title: 'Lista 1', items:[] },
    { id: '1', title: 'Lista 2', items:[1] }
]

// Definimos tipos de actions
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';

// 13/ Creamos reducer, pasando el estado inicial y un parámetro action
export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
		case ADD_LIST:
			const list = action.payload;
      return [...state, list];
		case DELETE_LIST:
			return state.filter(list => list.id !== action.payload.id);
    default:
      return state;
  }
}