import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();

  delete():void{
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.debug("product deleted", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error("product delete failed", err)
      }
    );

  }
  constructor(
    private route:ActivatedRoute,
    private productsvc:ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(id).subscribe(
      res => {
        this.product= res;
        console.debug("Product detail:", res);
      },
      err => {
        console.error("Error on product.get()", err);
      }

    )
  }

}
