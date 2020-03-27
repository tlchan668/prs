import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    //create new instance of menu
    new Menu("Users", "/users/list", "The user page"),
    new Menu("Vendors", "/vendors/list", "The vendors list page"),
    new Menu("Products", "/products/code", "The products list page")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
