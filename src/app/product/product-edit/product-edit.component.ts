import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product;
  vendors: Vendor[]=[];

  save():void{
    this.product.vendorId = Number(this.product.vendorId);
    this.productsvc.change(this.product).subscribe(
      res=>
      {
        console.debug("product change success", res);
        this.router.navigateByUrl("/products/list");
      },
      err=>{
        console.error("error changing products:", err);
    }
    );
  }  

  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res=>{
        this.vendors =res;
        console.debug("Vendors:", res);
      },
      err=> {
        console.error("error reading vendors:", err);
      }
    );
    let id = this.route.snapshot.params.id; 
    this.productsvc.get(id).subscribe(
      res=>{
        this.product = res;
        console.debug("product:", res);
      },
      err=>{
        console.error("error edit product:", err);
      }
    );
  }

}
