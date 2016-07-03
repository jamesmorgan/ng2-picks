import {Component, OnInit, Input} from "@angular/core";
import {User} from "../../core/domain/User";

@Component({
  moduleId: module.id,
  selector: 'users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() users:User[];

  constructor() {
  }

  ngOnInit() {
  }

}
