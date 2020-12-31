import { Injectable } from '@angular/core';
import {HttpService} from '../httpService';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl='http://localhost:8092/INVENTORY-SERVICE/produits/'
  token=JSON.parse(localStorage.getItem('access-token'))
  constructor(private httpService:HttpService) { }
  getProducts(){
    return this.httpService.getData(this.productsUrl,this.token)
  }
  navigate(id){
    let idUrl=btoa(id)
    return this.httpService.navigate('product/'+idUrl)
  }
}
