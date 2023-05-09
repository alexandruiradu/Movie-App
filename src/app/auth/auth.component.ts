import { Component } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  viewType:string = "login";

  email = new FormControl('', [Validators.required, Validators.email]);
  password:FormControl<string | null> = new FormControl("",[Validators.required]);
  reTypePassword:FormControl<string | null> = new FormControl("",[Validators.required])
  username:FormControl<string | null> = new FormControl("",[Validators.required]);
  hide = true;
  hide2 :boolean = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onLogIn():void {
    console.log("on log in pressed");
    console.log(this.email.getRawValue());
    console.log(this.password.getRawValue());
  }

  onSignUp():void {
    console.log("on sign up pressed");
    console.log(this.username.getRawValue());
    console.log(this.email.getRawValue());
    console.log(this.password.getRawValue());
    console.log(this.reTypePassword.getRawValue());
  }

  onChangeViewType(viewType:string){
    this.viewType = viewType;
  }
}
