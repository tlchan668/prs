import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {
  requestline: Requestline = new Requestline;
  products: Product[] = [];

  save():void{
    this.requestline.productId = Number(this.requestline.productId)
    this.requestlinesvc.change(this.requestline).subscribe(
      res=>{
        console.debug("RequestLine change success", res);
        this.router.navigateByUrl(`/requestsline/detail/${this.requestline.requestId}`);
        
      },
      err=>{
        console.error("Requestline save error:", err);
      }
    );
  }
  constructor(
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit(): void {
    this.productsvc.list().subscribe(
      res=>{
        this.products = res;
        console.debug("Products in rl", res);
      },
      err=>{
        console.error("Error reading products", err);
      }
    );
    let id = this.route.snapshot.params.id;
    this.requestlinesvc.get(id).subscribe(
      res=>{
        this.requestline = res;
        console.debug("RL edit:", res);
      },
      err=>{
        console.error("RL edit error:", err);
      }
    );
  }

}
