import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const url: string = "http://localhost:49908/api/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<User[]>{
    //bring back all rows of user
    return this.http.get(`${url}`) as Observable<User[]>;    
  }

  constructor(
    private http: HttpClient
  ) { }
}
