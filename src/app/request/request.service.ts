import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from './request.class';

const url: string = "http://localhost:49908/api/requests"

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  settoapprove(request: Request): Observable<any>{
    return this.http.post(`${url}/settoapproved`, request) as Observable<Request>;
  };
  settoreject(request: Request): Observable<any>{
    return this.http.post(`${url}/settorejected`, request) as Observable<Request>;
  };
  getrequestsreview(id: any): Observable<Request[]>{
    return this.http.get(`${url}/getrequestsreview/${id}`) as Observable<Request[]>;
  }
  settoreview( request: Request): Observable<any>{
    return this.http.post(`${url}/settoreview`, request) as Observable<Request>;
  }
  list(): Observable<Request[]>{
    //bring back all rows of request
    return this.http.get(`${url}`) as Observable<Request[]>;    
  }
  get(id: any): Observable<Request>{
    return this.http.get(`${url}/${id}`) as Observable<Request>;
  }
  create(request : Request): Observable<Request> {
    return this.http.post(`${url}`, request) as Observable<Request>;
  }
  change(request : Request): Observable<any> {
    return this.http.put(`${url}/${request.id}`, request) as Observable<Request>; 
  } 
  remove(request : Request): Observable<any> {
   return this.http.delete(`${url}/${request.id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient
  ) { }
}
