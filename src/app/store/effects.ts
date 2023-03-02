import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { ItemsService } from '../service/items-service.service';
import { getItems, getItemsSuccess, getItemsFailure } from './action';

@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.action$.pipe(
      ofType(getItems),
      exhaustMap((item) =>
        this.itemsService.loadItems(item.pageParam).pipe(
          map((items) => getItemsSuccess(items)),
          catchError(async (error) => {
            return getItemsFailure(error.message)
          })
        )
      )
    )
  );

  constructor(private action$: Actions, private itemsService: ItemsService) { }
}