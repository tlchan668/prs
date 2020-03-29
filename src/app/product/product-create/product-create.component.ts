import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors :Vendor[]=[];
  
  save(): void{
    this.product.vendorId =Number(this.product.vendorId);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.debug("Product created", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error("error creating product", err);
      }
    );
  }
  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //getting vendor list for options
    this.vendorsvc.list().subscribe(
      res=>{
        this.vendors =res;
        console.debug("Vendor:", res);
      },
      err=> {
        console.error("error reading Vendors:", err);
      }
    );
  }

}
