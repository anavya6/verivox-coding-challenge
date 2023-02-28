import { ItemsServiceService } from './../../service/items-service.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  items: Array<Item> = [];

  constructor(private itemsService: ItemsServiceService) { }
  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemsService.getItems().subscribe((resp) => {
      this.items = resp;
    });
  }
}
