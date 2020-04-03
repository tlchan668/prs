import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {
  requests: Request[]=[];
  searchCriteria: string='';

  constructor(
    private requestsvc: RequestService,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {

    console.debug("userid:",this.systemsvc.loginUser)
    this.requestsvc.getrequestsreview(this.systemsvc.loginUser.id).subscribe(
     res=> {
       this.requests = res;
       console.debug("Request-list:", res);
      },
       err => {
         console.error(err);}
     );
  }

}
