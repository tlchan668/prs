import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request= new Request();
  loguser: User= new User();

  

  
  save(): void{
    //this.request.userId=1;
   this.request.userId=this.systemsvc.loginUser.id;
  
    
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
    private systemsvc: SystemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.request.deliveryMode="Pickup";
    this.request.status="NEW";
    this.loguser=this.systemsvc.loginUser;
    console.debug("loguserr:", this.loguser.username);
    console.debug("loginuser:", this.systemsvc.loginUser);
    
  }

}
