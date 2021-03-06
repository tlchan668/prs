import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User= new User;
  msg: string ="";

  login(username: string, password: string): User {
    this.usersvc.login(username, password).subscribe(
      res=>{
        this.user=res;
        this.systemsvc.loginUser=this.user; //system service prop
        console.debug("loginUser:", this.systemsvc.loginUser)
        this.router.navigateByUrl("requests/list");
               
      },
      err=>{
        console.error("error in login", err);
        this.msg = "User or Password not found";
      }

    );
    return this.user;
    //05/04/20 -May the Fourth be with YOU!
  }

  constructor(
    private usersvc: UserService,
    private systemsvc: SystemService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    //read the back end stored in users[]   
  }

}
