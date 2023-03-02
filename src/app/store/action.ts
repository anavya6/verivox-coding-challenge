import { ItemPageParam } from './../model/ItemPageParam';
import { createAction } from '@ngrx/store'
import { Item } from '../model/item';

export const getItems = createAction('[Item] Get item',
  (pageParam: ItemPageParam) => ({ pageParam })
);

export const getItemsSuccess = createAction(
  '[Item] Get item success',
  (items: Item[]) => ({ items })
);

export const getItemsFailure = createAction(
  '[Item] Get item failure',
  (error: string) => ({ error })
);


