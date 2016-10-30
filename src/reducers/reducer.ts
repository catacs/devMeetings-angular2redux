import { Action } from '@ngrx/store'

// 4/ Definimos estado inicial
export const initialState = [
    { id: '0', title: 'Lista 1', items:[] },
    { id: '1', title: 'Lista 2', items:[1] }
]

// Definimos tipos de actions
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';

function addList(state, list) {
  return [...state, list];
}

function deleteList(state, id) {
  return state.filter(list => list.id !== id);
}

function addListItem(state, list) {
  // TODO Añadir item
  return state;
}

function deleteListItem(state, list) {
  // TODO Borrar item
  return state;
}

// 13/ Creamos reducer, pasando el estado inicial y un parámetro action
export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
		case ADD_LIST:
      return addList(state, action.payload);
		case DELETE_LIST:
			return deleteList(state, action.payload.id);
    case ADD_LIST_ITEM:
      return addListItem(state, action.payload);
    case DELETE_LIST_ITEM:
    return deleteListItem(state, action.payload);
    default:
      return state;
  }
}