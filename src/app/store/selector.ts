import { createSelector } from '@ngrx/store';
import { Item } from '../model/item'
import { ItemState } from './reducer';

export const itemSelector = createSelector(
  (state: ItemState) => state.items,
  (items: ReadonlyArray<Item>) => items
);

