import {Component, OnInit} from '@angular/core';
import {LoginService} from '../common/login-service/login.service';
import {Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {ProductService} from '../common/product-service/product.service';
import {ProductModel} from '../models/Product.model';
import {CaddyService} from '../common/caddy-service/caddy.service';


@Component({
  selector: 'app-route',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:ProductModel[]=[]
  picUrl='http://localhost:8092/INVENTORY-SERVICE/productPic/'
  constructor(private loginService: LoginService,
              private productService: ProductService,
              private caddyService:CaddyService
  ) {
  }

  ngOnInit(): void {
    this.getProducts()

    this.loginService.checkAuthentication('products')
  }
  getProducts() {

    this.productService.getProducts().subscribe(
      (response: HttpResponse<any>) => {
        this.products=response.body._embedded.produits
      });
  }

  getOneProduct(id) {
    this.productService.navigate(id)
  }


  addProductToCaddy(product: ProductModel) {
    this.caddyService.addProductItemToCaddy(product)
  }
}
