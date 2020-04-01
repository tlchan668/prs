import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

const url: string= "http://localhost:49908/api/requestlines"
@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  get(id: any): Observable<Requestline>{
    return this.http.get(`${url}/${id}`) as Observable<Requestline>;
  }
  create(requestline : Requestline): Observable<Requestline> {
    return this.http.post(`${url}`, requestline) as Observable<Requestline>;
  }
  change(requestline : Requestline): Observable<any> {
    return this.http.put(`${url}/${requestline.id}`, requestline) as Observable<Request>; 
  } 
  remove(requestline : Requestline): Observable<any> {
   return this.http.delete(`${url}/${requestline.id}`) as Observable<any>;
  }

  constructor(
    private http: HttpClient
    ) { }
}
