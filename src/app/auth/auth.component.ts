import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  viewType: string = "login";

  email = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl<string | null> = new FormControl("", [Validators.required]);
  reTypePassword: FormControl<string | null> = new FormControl("", [Validators.required])
  username: FormControl<string | null> = new FormControl("", [Validators.required]);
  hide = true;
  hide2: boolean = true;

  constructor(private authService: AuthService, private router: Router) {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLogIn(): void {
    console.log("on log in pressed");
    let emailData = this.email.getRawValue()!;
    let passwordData = this.password.getRawValue()!;
    if (emailData != "" && passwordData != "") {
      this.authService.login(emailData, passwordData).subscribe((response: any) => {
        console.log(response);
        if (response.status == 200) {
          this.clearLoginFields();
          this.router.navigate(["/", "dashboard"]);
        }
      })
    }
  }

  onSignUp(): void {
    console.log("on sign up pressed");
    let usernameData = this.username.getRawValue()!;
    let emailData = this.email.getRawValue()!;
    let passwordData = this.password.getRawValue()!;
    let reTypePasswordData = this.reTypePassword.getRawValue()!;
    if (usernameData != "" && emailData != "" && passwordData != "" && reTypePasswordData != "") {
      this.authService.register(emailData, passwordData, usernameData, reTypePasswordData).subscribe((response: any) => {
        console.log(response);
        this.clearSignUpFields();
        this.viewType = "login";
      })
    }
  }

  onChangeViewType(viewType: string) {
    this.viewType = viewType;
  }

  private clearLoginFields() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl("", [Validators.required]);
  }

  private clearSignUpFields() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl("", [Validators.required]);
    this.reTypePassword = new FormControl("", [Validators.required])
    this.username = new FormControl("", [Validators.required]);
  }
}
