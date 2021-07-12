import { Injectable } from '@angular/core';

export interface Product {
  name: string;
  position: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 public store: Product[] ;
  constructor() { }
  contracts: Product[] = [
    {position: '/assets/imagesp/honey.jpg', name: 'Saffola Pure Honey,1.5kg (Super Saver Pack)',  price: 475 },
    {position: '/assets/imagesp/oil.jpg', name: ' Organic Groundnut Oil, 1 L',    price: 410 },
    {position: '/assets/imagesp/masala.jpg', name: 'Cafreal Masala Paste, 200 g', price: 289 },
    {position: '/assets/imagesp/darkfantasy.jpg', name: 'Sunfeast Dark Fantasy Choco Fills, 600 g', price: 237 },
    {position: '/assets/imagesp/rice.jpg', name: 'Double Horse Rice1kg Biriyani Rice ', price: 339 },
    {position: '/assets/imagesp/surfexecl.jpg', name: 'Surf Excel Matic  Detergent Powder - 4 Kg ', price: 948  },
    {position: '/assets/imagesp/almonds.jpg', name: 'Tulsi California Almonds Premium, 200g', price: 199 },
    {position: '/assets/imagesp/comfort.jpg', name: 'Comfort After Wash Morning Fresh Fabric Conditioner, 860 ml', price: 195 },
    {position: '/assets/imagesp/maggi.jpg', name: 'Maggi 2-Minute Special Masala Instant Noodles, 70g (Pack of 12)', price: 162 },
{position: '/assets/imagesp/celebrations.jpg', name: 'Cadbury Celebrations Assorted Chocolate Gift Pack, 186.6g - Pack of 2', price: 385},
    {position: '/assets/imagesp/pumkin.jpg', name: ' Vedaka Premium Pumpkin Seeds, 200g',  price: 189 },
    {position: '/assets/imagesp/raisins.jpg', name: 'Vedaka Popular Raisins, 1kg',    price: 385 },
    {position: '/assets/imagesp/coconutoil.jpg', name: 'Maxcare Virgin Coconut Oil (Cold Pressed) 500ML', price: 356 },
    {position: '/assets/imagesp/brownrice.jpg', name: 'Erika Organics Brown Rice Poha, 1.25Kg(250gx5)', price: 350 },
    {position: '/assets/imagesp/groundnut.jpg', name: 'Grocery Groundnut| Raw Peanuts (2 kg) ', price: 485 },
    {position: '/assets/imagesp/ariel.jpg', name: 'Ariel Detergent Washing Powder - 4 kg with free 2 kg ', price: 925 },
    {position: '/assets/imagesp/jowar.jpg', name: 'Jai Jinendra Food & Grocery Jawar (Sorghum) Whole - 10 kg', price: 330 },
    {position: '/assets/imagesp/oats.jpg', name: 'Saffola Oats, 1 kg with Free Saffola Oats 400 gm', price: 195 },
    {position: '/assets/imagesp/cornfloor.jpg', name: 'Jai Jinendra Food & Grocery Corn Starch (Makkai) Powder - 400 gm', price: 169 },
    {position: '/assets/imagesp/foodmasala.jpg', name: 'Chokhi Dhani Foods Malai Kofta, 300 g', price: 162},
    ];

  }
