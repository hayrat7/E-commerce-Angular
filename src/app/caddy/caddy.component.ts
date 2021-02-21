import {Component, OnInit} from '@angular/core';
import {ProductItem} from '../models/productItem.model';
import {CaddyService} from '../common/caddy-service/caddy.service';
import {MatTableDataSource} from '@angular/material/table';
import {LoginService} from '../common/login-service/login.service';


@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price', 'quantity', 'delete'];
  dataSource: MatTableDataSource<ProductItem> = new MatTableDataSource<ProductItem>(this.caddyService.getCaddy())

  constructor(private caddyService:CaddyService,
              private loginService:LoginService
              ) {
  }
  ngOnInit(): void {
    this.loginService.checkAuthentication('caddy')
  }
  removeItem(element: ProductItem) {
    console.log(element)
    this.caddyService.remove(element)
    this.dataSource.data = this.caddyService.getCaddy();
  }
}
