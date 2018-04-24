// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class Auth {

  /* auth0 = new auth0.WebAuth({
    clientID: '9i9YtW9VzlKDwAymmZgwH2q9zwvjXPoM',
    domain: 'iraguha.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://api.vega.final.com',
    redirectUri: 'http://localhost:5000/',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    var test = new Date().getTime() < expiresAt;
    return new Date().getTime() < expiresAt;
  }

  public getToken(): string {
    var test = localStorage.getItem('token');

    console.log("Token" + test);
    //return localStorage.getItem('token');

    return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IlFVRTNPVUZFTUVVNU5UTXhNVEF3UWpsQ09EQTNNVUk1TXpjNVF6aENOREEwTWpBNFEwWXdNUSJ9.eyJpc3MiOiJodHRwczovL2lyYWd1aGEuZXUuYXV0aDAuY29tLyIsInN1YiI6ImxROGh4S3piUUdzSXZnUWM2Z01PWVlBT0dVRk5vNGVuQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS52ZWdhLmZpbmFsLmNvbSIsImlhdCI6MTUyNDQzNTMxNiwiZXhwIjoxNTI0NTIxNzE2LCJhenAiOiJsUThoeEt6YlFHc0l2Z1FjNmdNT1lZQU9HVUZObzRlbiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.NOfDVv7bUHjurP5jG3666qMc0jZzlurPUaaxkmkqj1HNDp3HFLazssNoNL8qHFU53DMS2U-uBob9LD5_6C3fpcxo3saKNclbMNiuKiRU8jutEoKI9PvQXJacAaVgdBuIwhS0pPi0_MV2mcK74fro-EDBpiWjhZ3oqco581yQcyNXpN7duWM1vs60dWVQ4CB5XEC2qlOA6ttO80zhmlI9yF_H6cQ3I_kq4IWHj4y8t1M1b_1GkFK0c2yZzXPlH8CZ7mC24o39jqPEDt9uN2yZPb3LSRUfry2r525f2WOxTW_-tzFQ9ya-zMx_BEGI6Zc2eTsxEPV-mYe2CAda7DeTYQ";

  } */
}