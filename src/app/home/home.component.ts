import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public contracts: Product[] ;
public store: Product[] = [];
public arr: Product;
  constructor(private product: ProductService) { }


  ngOnInit(): void {
    this.contracts = this.product.contracts;
    this.product.store = this.store ;
  }
  addToCart(product: Product) {
    const ar = {position: product.position, name: product.name,  price: product.price};
    this.arr = ar;
   alert("added to cart sucessfully");
    this.store.push(this.arr);
    }

}
