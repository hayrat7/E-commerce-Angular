import {ProductItem} from './productItem.model';
import {Customer} from './Customer';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Caddy{
  productItems: ProductItem[]=[]
  customer:Customer
}
