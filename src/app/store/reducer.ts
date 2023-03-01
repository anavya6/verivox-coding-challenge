import { createReducer, on, } from '@ngrx/store';
import { getItemsSuccess } from './action';

import { Item } from '../model/item';

export interface ItemState {
  items: ReadonlyArray<Item>;
};

export const initialItemState: ReadonlyArray<Item> = []

export const itemReducer = createReducer(
  initialItemState,
  on(getItemsSuccess, (state, { items }) => [...items]),
);
