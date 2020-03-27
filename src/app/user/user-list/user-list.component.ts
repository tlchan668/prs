import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  constructor(
    private user: UserService
  ) { }

  ngOnInit(): void {
    this.user.list().subscribe(
      res => {
        this.users = res;
        console.debug("User-list:",  res)
      },
      err=>{
        console.error(err);
      }
    );
  }

}
