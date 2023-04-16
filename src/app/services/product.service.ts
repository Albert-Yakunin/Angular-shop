import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';
import { Iproduct } from '../models/product';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<Iproduct[]> {
    return this.http
      .get<Iproduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(delay(500), catchError(this.errorHandler));
  }
}
