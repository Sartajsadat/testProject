import {AppState} from "../app.state";
import {createSelector, select} from "@ngrx/store";


export const selectCounterState=(state:AppState) => state.counter;
export const selectCount=createSelector(
  selectCounterState,(state)=>state.count
)

