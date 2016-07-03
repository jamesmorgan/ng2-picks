import {provideRouter, RouterConfig} from "@angular/router";
import {AdminDashboardComponent} from "./feature/admin-dashboard";
import {UserManagementComponent} from "./feature/user-management";
import {GameManagementComponent} from "./feature/game-management";
import {LeagueManagementComponent} from "./feature/league-management/league-management.component";
import {CompetitionManagementRoutes} from "./feature/admin/competition/competition-management.routes";

export const dashboardRoutes:RouterConfig = [
  /**
   * Admin landing page / default
   */
  {path: '', component: AdminDashboardComponent, terminal: true},
  {path: 'admin', component: AdminDashboardComponent},
  /**
   * Admin sections
   */
  {path: 'admin/user-management', component: UserManagementComponent},
  {path: 'admin/game-management', component: GameManagementComponent},
  {path: 'admin/league-management', component: LeagueManagementComponent},
];

export const routes:RouterConfig = [
  /**
   * Include each top level section
   */
  ...dashboardRoutes,
  /**
   * Also include the sub section competition-management
   *
   * NB: this also defines a router-outlet with a set of children (see routes file within competition management dir)
   */
  ...CompetitionManagementRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
