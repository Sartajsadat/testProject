import { createReducer, on, Action } from '@ngrx/store';
import { addRedux, updateRedux, deleteRedux } from './redux.actions';
import { Redux } from '../../model/redux.model';

export interface ReduxState {
  redux: Redux[];
}

export const initialState: ReduxState = {
  redux: []
};

const _reduxReducer = createReducer(
  initialState,
  on(addRedux, (state, { redux }) => ({
    ...state,
    redux: [...state.redux, { ...redux, id: state.redux.length + 1 }] // Ensure unique ID
  })),
  on(updateRedux, (state, { redux }) => ({
    ...state,
    redux: state.redux.map(r => r.id === redux.id ? redux : r)
  })),
  on(deleteRedux, (state, { id }) => ({
    ...state,
    redux: state.redux.filter(r => r.id !== id)
  }))
);

export function reduxReducer(state: ReduxState | undefined, action: Action) {
  return _reduxReducer(state, action);
}