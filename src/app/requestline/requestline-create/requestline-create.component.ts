import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {
  
  requestline: Requestline = new Requestline();
  requestId: number;  //from the route
  products: Product[]=[];

  save(): void{
    this.requestline.requestId=Number (this.requestId);
    this.requestline.productId = Number(this.requestline.productId);
    this.requestlinesvc.create(this.requestline).subscribe(
      res=>{
        console.debug("RL created:", res);
        this.router.navigateByUrl(`/requestsline/detail/${this.requestline.requestId}`);
      },
      err=>{
        console.error("RL create error", err);
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
    this.requestId = this.route.snapshot.params.id;
    this.productsvc.list().subscribe(
      res=>{
        this.products = res;
        console.debug("Products in rl", res);
      },
      err=>{
        console.error("Error reading products", err);
      }
    );
  }

}
