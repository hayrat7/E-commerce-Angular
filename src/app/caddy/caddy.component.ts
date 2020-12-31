import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../models/Product.model';


@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'quantity','delete'];
  dataSource: ProductModel[] = [
    {  id: 1,
      name:'test',
      price:10.0,
      quantity:5
    },
    {  id: 2,
      name:'test1',
      price:10.0,
      quantity:5
    },
    {  id: 3,
      name:'test1',
      price:10.0,
      quantity:5
    },
    {  id: 2,
      name:'test1',
      price:10.0,
      quantity:5
    },
    {  id: 2,
      name:'test1',
      price:10.0,
      quantity:5
    },
    {  id: 2,
      name:'test1',
      price:10.0,
      quantity:5
    },
    {  id: 2,
      name:'test1',
      price:10.0,
      quantity:5
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
