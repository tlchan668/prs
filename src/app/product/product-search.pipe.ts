import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string = ''): Product  [] {
    if(searchCriteria === '') return products;
    let criteria = searchCriteria.toLowerCase();
    let selProducts: Product[]=[];
    for( let product of products){
      
      if(product.partNbr.toLowerCase().includes(criteria)){
        selProducts.push(product);
        continue;
      }
      if(product.name.toLowerCase().includes(criteria)){
        selProducts.push(product);
        continue;
      }
      if(product.price.toString().includes(criteria)){
        selProducts.push(product);
        continue;
      }
      if(product.unit.toLowerCase().includes(criteria)){
        selProducts.push(product);
        continue;
      }      
    }
    return selProducts;
  }

}
