import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request= new Request();
  

  
  save(): void{
    this.request.userId=1;
    this.request.rejectionReason='';
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.debug("Request created", res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error("error creating request", err);
      }
    );
  }
  constructor(
    private requestsvc : RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.request.deliveryMode="Pickup";
    this.request.status="NEW";
  }

}
