import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Item } from '../model/item';
import { ItemPageParam } from '../model/ItemPageParam';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseURL = environment.apiURL || "http://localhost:3000/api";

  constructor(private http: HttpClient) { }

  loadItems(pageParams: ItemPageParam): Observable<Array<Item>> {
    return this.http.post<Array<Item>>(`${this.baseURL}/items`, pageParams).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    if (err.status === 400) {
      return throwError(() => new Error("Bad request"));
    }
    return throwError(() => new Error(
      "Internal server error. Please contact your administrator."));
  }
}
