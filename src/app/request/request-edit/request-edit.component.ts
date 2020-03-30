import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request = new Request;

  save():void{
    this.requestsvc.change(this.request).subscribe(
      res=>{
        console.debug("Request change success", res);
        this.router.navigateByUrl("/requests/list");
      },
      err=>{
        console.error("Request save error:", err);
      }
    );
  }


  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router 
    ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res=>{
        this.request = res;
      },
      err=>{
        console.error("Request error:", err);
      }
    );
  }

}
