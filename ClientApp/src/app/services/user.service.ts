import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { ConfigService } from '../shared/utils/config.service';
import { UserRegistration } from '../models/User.registration.interface';

@Injectable()
export class UserService extends BaseService {

  baseUrl: string = '';

  // Observable navItem source
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;

  constructor(private http: Http, private configService: ConfigService) 
  {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

  public register(email: string, password: string, firstName: string, lastName: string,location: string): Observable<UserRegistration> 
    {
      let body = JSON.stringify({ email, password, firstName, lastName,location });
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post(this.baseUrl + "/accounts", body, options)
        .map(res => true)
        .catch(this.handleError);
    }  

   public login(userName, password) 
   {
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');

      return this.http
        .post(
          this.baseUrl + '/auth/login',
          JSON.stringify({ userName, password }),{ headers }
          )
          .map(res => res.json())
          .map(res => {
            localStorage.setItem('auth_token', res.auth_token);
            this.loggedIn = true;
            this._authNavStatusSource.next(true);
            return true;
          })
          .catch(this.handleError);
   }

  public logout()
  {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  public isLoggedIn()
  {
    return this.loggedIn;
  }

  public facebookLogin(accessToken:string) 
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let body = JSON.stringify({ accessToken });  
    return this.http
      .post(
      this.baseUrl + '/externalauth/facebook', body, { headers })
      .map(res => res.json())
      .map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        return true;
      })
      .catch(this.handleError);
  }
}
