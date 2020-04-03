import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Requestline } from 'src/app/requestline/requestline.class';
import {Request } from '../request.class'; 

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  id: number; 
  request: Request;
  requestline: Requestline;

  settoapprove():void{
    if(this.systemsvc.loginUser.isAdmin === true || this.systemsvc.loginUser.isReviewer){
    this.requestsvc.settoapprove(this.request).subscribe(
      res=>{
        console.debug("Approve request", res)
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error("request review approvae error", err);
      }
    );
    }
    //else message don't have permission
  }
  settoreject():void{
    if(this.systemsvc.loginUser.isAdmin  || this.systemsvc.loginUser.isReviewer){
    this.requestsvc.settoreject(this.request).subscribe(
      res=>{
        console.debug("Approve request", res)
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error("request review approvae error", err);
      }
    );
    }
  }

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private requestlinesvc: RequestlineService,
    private router: Router,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.requestsvc.get(this.id).subscribe(
      res=>{
        this.request=res;
        console.debug("request review:", res);
      },
      err=>{
        console.error("Error request review lines", err);
      }
    );
  }

}
