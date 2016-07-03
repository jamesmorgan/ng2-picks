import {provideRouter, RouterConfig} from "@angular/router";
import {AdminDashboardComponent} from "./feature/admin-dashboard";
import {UserManagementComponent} from "./feature/user-management";
import {GameManagementComponent} from "./feature/game-management";
import {LeagueManagementComponent} from "./feature/league-management/league-management.component";
import {CompetitionManagementRoutes} from "./feature/admin/competition/competition-management.routes";
import {LoginRoutes, AUTH_PROVIDERS} from "./feature/login/login.routes";
import {CanDeactivateGuard} from "./feature/login/interfaces";
import {AuthGuard} from "./feature/login/auth.guard";


export const dashboardRoutes:RouterConfig = [
  /**
   * Admin landing page / default
   */
  {
    path: '',
    component: AdminDashboardComponent, terminal: true,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin', component: AdminDashboardComponent,
    canActivate: [AuthGuard]
  },
  /**
   * Admin sections
   */
  {
    path: 'admin/user-management', component: UserManagementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/game-management', component: GameManagementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/league-management', component: LeagueManagementComponent,
    canActivate: [AuthGuard]
  },
];

export const routes:RouterConfig = [
  /**
   * Pull in and define the login routes
   */
  ...LoginRoutes,
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
  /**
   * Add all routes
   */
  provideRouter(routes),
  /**
   * Add in authentication controls e.g. AuthGuard, AuthService
   */
  AUTH_PROVIDERS,
  /**
   * TODO work out what this does...?
   */
  CanDeactivateGuard
];
