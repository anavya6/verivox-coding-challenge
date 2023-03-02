import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ItemState } from 'src/app/store/reducer';
import { itemSelector, itemsLoadError } from 'src/app/store/selector';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  items$ = this.store.pipe(select(itemSelector));
  error$ = this.store.pipe(select(itemsLoadError));

  constructor(private store: Store<ItemState>) { }
}
