import {HttpClient} from '@angular/common/http';
import { Product } from '../product/product.class';

export class Requestline{
    id: number=0;
    requestId:number;
    productId:number;
    quantity: number;
    product: Product=null;

    constructor(){}
}