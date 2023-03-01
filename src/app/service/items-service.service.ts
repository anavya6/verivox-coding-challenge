import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { ItemPageParam } from '../model/ItemPageParam';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseURL = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Item[]>(`${this.baseURL}/items`);
  }

  postItems(pageParams: ItemPageParam) {
    return this.http.post<Item[]>(`${this.baseURL}/items`, pageParams);
  }

  handleError(error: Error) {
    console.error(error.message)
  }
}
