import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'game-management',
  templateUrl: 'game-management.component.html',
  styleUrls: ['game-management.component.css'],
  directives: [ROUTER_DIRECTIVES],
})
export class GameManagementComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
