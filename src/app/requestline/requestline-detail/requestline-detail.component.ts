import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { Requestlines } from 'src/app/menu/requestlines/requestlines.class';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-detail',
  templateUrl: './requestline-detail.component.html',
  styleUrls: ['./requestline-detail.component.css']
})
export class RequestlineDetailComponent implements OnInit {

  request: Request = new Request();
  requestline: Requestline = new Requestline();
  id: number; 
  
  changetoReview(request: Request):void { 
    console.debug("Request in changetoreview:", request);
    this.requestsvc.settoreview(request).subscribe(
      res=>{
        console.debug("Changed to review", res);
        this.router.navigateByUrl("requests/list");
      },
      err=>{
        console.error("request error", err);
      }
    );
  
  }

  refresh():void{
    console.debug("Refresh id:",this.id);
    this.requestsvc.get(this.id).subscribe(
      res => {
        this.request= res;
        console.debug("Request detail in rl:", res);
      },
      err => {
        console.error("Error on request in rl", err);
      }
    );
  }
  
 delete(rl: Requestline): void{
   console.debug("rldebug:", rl);
   this.requestlinesvc.remove(rl).subscribe(
      res=>{
       this.refresh();
     },
     err=>{
        console.error("RL delete", err);
      }
   );

 }

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.debug("ID:", this.id);
    this.refresh();
    // this.requestsvc.get(this.id).subscribe(
    //    res => {
    //      this.request= res;
    //      console.debug("Request detail in rl:", res);
    //    },
    //    err => {
    //      console.error("Error on request in rl", err);
    //    }
    //  );
  }

}
