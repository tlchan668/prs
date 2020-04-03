import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // logedinuser: User;
  // msg: string;
  // this.msg=this.systemsvc.loginUser.username;
  menus: Menu[] = [
    //create new instance of menu
    new Menu("Users", "/users/list", "The Users page"),
    new Menu("Vendors", "/vendors/list", "The Vendors list page"),
    new Menu("Products", "/products/list", "The Products list page"),
    new Menu("Requests", "/requests/list", "The Request list page"),
    new Menu("Reviews", "/requests/review-list", "The Reviews list page"),
    new Menu("Login/out", "/users/login", "Login/Logout"),
    
  ];
 

  

    constructor(
    private usersvc: UserService,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
    //this.logedinuser=this.systemsvc.loginUser;

  }

}
