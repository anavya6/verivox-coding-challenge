import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  fields: Array<string> = ["Title", "Price", "Rating"]
  filterBy = "price"; // Set default filter: `price`
  sortBy = "price"; // Set default sort : `price`
  sort = "asc"; // by default sort order : `asc`

  sortToggle() {
    this.sort = this.sort === 'asc' ? "desc" : "asc";
  }

  filterChange(field: string) {
    this.filterBy = field.toLowerCase();
    // TODO filter the results
  }

  sortChange() {
    // TODO sort the results
  }
}
