import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public contracts: Product[] ;
  public store: Product[] ;
  public i = 0 ;
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.contracts = this.product.contracts;
    this.store = this.product.store;
  }

  remove(k) {
    this.i = this.store.findIndex(x => x.position === k.position);

    if (this.i !== -1) {
      this.store.splice(this.i, 1) ;
  }

  }

}
