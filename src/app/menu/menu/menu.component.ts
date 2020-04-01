import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    //create new instance of menu
    new Menu("Users", "/users/list", "The User page"),
    new Menu("Vendors", "/vendors/list", "The Vendors list page"),
    new Menu("Products", "/products/list", "The Products list page"),
    new Menu("Requests", "/requests/list", "The Request list page"),
    new Menu("Reviews", "/reviews/list", "The Reviews list page"),
    new Menu("Login/out", "/users/login", "The Reviews list page"),

  ];

  constructor(
    private usersvc: UserService,
  ) { }

  ngOnInit(): void {
  }

}
