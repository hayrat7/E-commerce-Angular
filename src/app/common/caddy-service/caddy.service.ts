import {Injectable} from '@angular/core';
import {Caddy} from '../../models/caddy.model';
import {ProductModel} from '../../models/Product.model';
import {ProductItem} from '../../models/productItem.model';

@Injectable({
  providedIn: 'root'
})
export class CaddyService {

  //items = this.caddy.productItems;
  constructor(public caddy: Caddy) {

    let caddy1 = localStorage.getItem('caddy');
    if (caddy1) {
      this.caddy = JSON.parse(caddy1);
    }
    /*else {
       this.caddy=new Caddy()
     }*/
  }

  saveCaddy() {

    localStorage.setItem('caddy', JSON.stringify(this.caddy));

  }

  addProductItemToCaddy(product: ProductModel) {

    let item = this.caddy.productItems.find(i => i.product.id === product.id);
    if (item) {
      item.quantity += product.quantity;
    } else {
      item = new ProductItem();
      item.product = product;
      item.quantity = product.quantity;
      item.price = product.price;
      this.caddy.productItems.push(item);
      this.saveCaddy();
    }
  }

  remove(item: ProductItem) {
    let index = this.caddy.productItems.indexOf(item);
    this.caddy.productItems.splice(index, 1);

    this.saveCaddy();

  }
  getCaddy(){
    return this.caddy.productItems
  }
}
