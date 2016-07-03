import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {User} from "../../core/domain/User";
import {UsersService} from "../../core/services/UsersService";
import {UsersListComponent} from "../../componenets/users-list/users-list.component";

@Component({
  moduleId: module.id,
  selector: 'user-management',
  templateUrl: 'user-management.component.html',
  styleUrls: ['user-management.component.css'],
  directives: [
    ROUTER_DIRECTIVES, 
    UsersListComponent
  ],
})
export class UserManagementComponent implements OnInit {

  /** Public data */
  users:User[];

  private _usersSubscription:Subscription;

  constructor(private _userService:UsersService) {
    // Subscribe an changes which may happen
    this._usersSubscription = this._userService.usersChanged$.subscribe((users) => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy():any {
    this._usersSubscription.unsubscribe(); // prevent memory leak when component destroyed
  }

}
