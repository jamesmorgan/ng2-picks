import {Component, OnInit, Input} from "@angular/core";
import {League} from "../../core/domain/League";

@Component({
  moduleId: module.id,
  selector: 'leagues-list',
  templateUrl: 'leagues-list.component.html',
  styleUrls: ['leagues-list.component.css']
})
export class LeaguesListComponent implements OnInit {

  @Input() leagues:League[];

  constructor() {
  }

  ngOnInit() {
  }

}
