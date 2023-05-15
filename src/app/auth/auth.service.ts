import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(email:string,password:string): any{
    let body = {
      "email":email,
      "password":password
    }
    return this.httpClient.post(
      "https://api.codebyte-software.com:2323/api/auth/login",
      body
    )
  }

  register(email:string,password:string,username:string,reTypePassword:string): any{
    let body = {
      "email":email,
      "password":password,
      "username":username,
      "reTypePassword":reTypePassword
    }
    return this.httpClient.post(
      "https://api.codebyte-software.com:2323/api/auth/register",
      body
    )
  }
}
