import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  save():void{
    if(this.user.firstname == ''){
      this.user.firstname = "noname";
    }
    if(this.user.lastname == ''){
      this.user.lastname = "noname";
    }
  
    this.usersvc.create(this.user).subscribe(
    res=>{
      console.debug("User created", res);
      this.router.navigateByUrl("users/list");
    },
    err=>{console.error("Error creating User", err)}
    );
  }
  constructor(private usersvc: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

}
