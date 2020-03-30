import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string=''): Request[] {
    if(searchCriteria === '') return requests;
    let criteria = searchCriteria.toLowerCase();
    let selRequests: Request[]=[];
    for(let r of requests){
      
      if(r.description.toLowerCase().includes(criteria)){
        selRequests.push(r);
        continue;
      }
      if(r.justification.toLowerCase().includes(criteria)){
        selRequests.push(r);
        continue;
      }
      if(r.rejectionReason!= null && r.rejectionReason.toLowerCase().includes(criteria)){
         selRequests.push(r);
         continue;
      }
      if(r.deliveryMode.toLowerCase().includes(criteria)){
        selRequests.push(r);
        continue;
      }
      if(r.status.toLowerCase().includes(criteria)){
        selRequests.push(r);
        continue;
      }
    }
    return selRequests;
  }

}
