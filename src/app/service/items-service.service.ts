import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  baseURL = "http://localhost:3000/api";
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Item[]>(`${this.baseURL}/items`);
  }

  handleError(error: Error) {
    console.error(error.message)
  }
}
