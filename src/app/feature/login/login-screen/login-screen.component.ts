import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login-screen',
  templateUrl: 'login-screen.component.html',
  styleUrls: ['login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  message:string;

  model = {
    token: String
  };

  constructor(public authService:AuthService, public router:Router) {
    this.setMessage();
  }

  ngOnInit():any {
    return undefined;
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Todo: capture where the user was going and nav there.
        // Meanwhile redirect the user to the crisis admin
        this.router.navigate(['admin']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  showFormControls(form: NgForm) {
    return form;
  }
}
