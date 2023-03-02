import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemState } from './reducer';

export const selectItems = createFeatureSelector<ItemState>('items');
export const selectError = createFeatureSelector<ItemState>('error');

export const itemSelector = createSelector(
  selectItems,
  state => state.items
);

export const itemsLoadError = createSelector(
  selectItems,
  state => state.error
);

