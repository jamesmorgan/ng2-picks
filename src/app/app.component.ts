import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {CompetitionsService} from "./core/services/CompetitionsService";
import {CompetitionApi} from "./core/api/CompetitionApi";
import {UsersService} from "./core/services/UsersService";
import {UserApi} from "./core/api/UserApi";
import {SelectionApi} from "./core/api/SelectionApi";
import {SelectionsService} from "./core/services/SelectionsService";
import {GameApi} from "./core/api/GameApi";
import {GamesService} from "./core/services/GameService";
import {LeagueApi} from "./core/api/LeagueApi";
import {LeaguesService} from "./core/services/LeaguesService";
import {CompetitionManagementListComponent} from "./feature/admin/competition/competition-management-list/competition-management-list.component";
import {CompetitionManagementComponent} from "./feature/admin/competition/competition-management/competition-management.component";
import {AdminDashboardComponent} from "./feature/admin-dashboard/admin-dashboard.component";
import {CompetitionManagementAddComponent} from "./feature/admin/competition/competition-management-add/competition-management-add.component";
import {CompetitionManagementEditComponent} from "./feature/admin/competition/competition-management-edit/competition-management-edit.component";
import {GameManagementComponent} from "./feature/game-management/game-management.component";
import {LeagueManagementComponent} from "./feature/league-management/league-management.component";
import {UserManagementComponent} from "./feature/user-management/user-management.component";
import {LoginScreenComponent} from "./feature/login/login-screen/login-screen.component";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [
    ROUTER_DIRECTIVES,
  ],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [
    CompetitionsService, CompetitionApi,
    UsersService, UserApi,
    SelectionsService, SelectionApi,
    GamesService, GameApi,
    LeaguesService, LeagueApi,
  ],
  precompile: [
    LoginScreenComponent,
    AdminDashboardComponent,
    GameManagementComponent,
    LeagueManagementComponent,
    UserManagementComponent,
    CompetitionManagementComponent,
    CompetitionManagementListComponent,
    CompetitionManagementAddComponent,
    CompetitionManagementEditComponent
  ]
})
export class AppComponent {
  title = 'Picks Admin Dashboard';
}
