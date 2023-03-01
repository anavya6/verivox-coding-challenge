import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EmptyError } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, tap } from 'rxjs/operators';
import { ItemsService } from '../service/items-service.service';
import { getItems, getItemsSuccess } from './action';

@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.action$.pipe(
      ofType(getItems),
      tap((item) => console.log(item)),
      exhaustMap((item) =>
        this.itemsService.postItems(item.pageParam).pipe(
          map((items) => getItemsSuccess(items)),
        )
      )
    )
  );

  constructor(private action$: Actions, private itemsService: ItemsService) { }
}