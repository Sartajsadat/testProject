import { createAction, props } from '@ngrx/store';
import { Redux } from '../../model/redux.model';

export const addRedux = createAction('[Redux] Add Redux', props<{ redux: Redux }>());
export const updateRedux = createAction('[Redux] Update Redux', props<{ redux: Redux }>());
export const deleteRedux = createAction('[Redux] Delete Redux', props<{ id: number }>());