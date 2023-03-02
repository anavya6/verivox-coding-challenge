import { createReducer, on, } from '@ngrx/store';
import { getItemsSuccess, getItemsFailure } from './action';

import { Item } from '../model/item';

export interface ItemState {
  items: Item[];
  error: string; // track errors
};

export const initialItemState: ItemState = {
  items: [],
  error: "",
}

export const itemReducer = createReducer(
  initialItemState,
  on(getItemsSuccess, (state, { items }) => {
    return {
      ...state,
      items: [...items],
      error: ""
    }
  }),
  on(getItemsFailure, (state, { error }) => {
    return {
      ...state,
      error: error
    }
  }),
);
