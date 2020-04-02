import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

request : Request = new Request();

changetoReview():void { 
  
  this.requestsvc.settoreview(this.request).subscribe(
    res=>{
      console.debug("Changed to review", res);
      this.router.navigateByUrl("requests/list");
    },
    err=>{
      console.error("request error", err);
    }
  );

}


delete(): void{
  this.requestsvc.remove(this.request).subscribe(
    res =>{
      console.debug("request deleted:", res);
      this.router.navigateByUrl("/requests/list");
    },
    err =>{
      console.error("Request delete failed", err);
    }
  );
 
}

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
        this.request= res;
        console.debug("Request detail:", res);
      },
      err => {
        console.error("Error on product.get()", err);
      }

    );
  }

}
