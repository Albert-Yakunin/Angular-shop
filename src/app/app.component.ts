import { Component, OnInit } from '@angular/core';
import { Iproduct } from './models/product';
import { products as data } from './data/products';
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular Shop';
  // products: Iproduct[];
  loading = false;
  // products$: Observable<Iproduct[]>;
  term: string = '';

  constructor(
    public productsService: ProductService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
    this.productsService.getAll().subscribe((products) => {
      this.loading = false;
    });
  }
}
