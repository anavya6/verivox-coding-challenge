import { ItemPageParam } from './../model/ItemPageParam';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getItems } from '../store/action';
import { ItemState } from '../store/reducer';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  fields: Array<string> = ["Title", "Price", "Rating", "Index"]
  filterBy = "index"; // Set default filter: `index`
  sortBy = "index"; // Set default sort : `index`
  sort = "asc"; // by default sort order : `asc`
  value = "";

  constructor(private store: Store<ItemState>) { }

  ngOnInit(): void {
    this.dispatchAction();
  }

  sortToggle() {
    this.sort = this.sort === 'asc' ? "desc" : "asc";
    this.dispatchAction();
  }

  sortChange() {
    this.dispatchAction();
  }

  filterChange(field: string) {
    this.filterBy = field.toLowerCase();
    this.dispatchAction();
  }

  onKey(event: any) {
    this.value = event.target.value;
    this.dispatchAction();
  }

  dispatchAction() {
    const pageParam: ItemPageParam = {
      sort: {
        sortBy: this.sortBy,
        order: this.sort
      },
      filter: {
        key: this.filterBy,
        value: this.value
      }
    }
    this.store.dispatch(getItems(pageParam))
  }
}
