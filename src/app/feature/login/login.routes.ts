import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {LoginScreenComponent} from "./login-screen/login-screen.component";

export const LoginRoutes = [
  {path: 'login', component: LoginScreenComponent}
];

/**
 * AuthGuard - implementation of CanActivate which checks is authenticated and redirects to /login if not
 * AuthService - basic true/alse are authenticated service
 */
export const AUTH_PROVIDERS = [AuthGuard, AuthService];
