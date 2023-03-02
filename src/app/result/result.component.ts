import { Component, Input } from '@angular/core';
import { Item } from '../model/item';

/* TODO to improve performance lazy load items either using pagination else load
items based on scroll event */
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() item: Item | undefined;
  detailsBtnLabel = "Show details";
  showDetails = false;

  toggleDetails() {
    this.detailsBtnLabel = `${this.detailsBtnLabel
      .includes("Show") ? "Less" : "Show"} details`;
    this.showDetails = !this.showDetails;
  }
}
