import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://127.0.0.1:8000/api/'
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.checkAuthAndRedirect();
  }

  signUp(userObj:any) {
    return this.http.post<any>(`${environment.api_url}/Auth/register`,userObj);

  }

  login(loginObj:any) {
    return this.http.post<any>(`${environment.api_url}/Auth/login`, loginObj);
    // return this.http.post<any>(`${environment.api_url}/Auth/login`,loginObj, { withCredentials: true });
  }

  logout() {
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }

  // storeToken(tokenValue: string) {
  //   localStorage.setItem(environment.api_token_identifier, tokenValue)
  // }

  storeToken(tokenValue: string, nameIdentifier: string, nopekIdentifier: string) {
    localStorage.setItem(environment.api_token_identifier, tokenValue);
    localStorage.setItem(environment.name_identifier, nameIdentifier);
    localStorage.setItem(environment.nopek_identifier, nopekIdentifier);
  }

  getToken() {
    return localStorage.getItem(environment.api_token_identifier)
  }

  getNameIdentifier() {
    return localStorage.getItem(environment.name_identifier);
  }

  getNoPekIdentifier() {
    return localStorage.getItem(environment.nopek_identifier);
  }

  isLogged(): boolean { 
    const token = localStorage.getItem(environment.api_token_identifier);
    return token !== null && token !== undefined;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(environment.api_token_identifier);
    return token !== undefined && token !== null && token !== '';
  }

  checkAuthAndRedirect() {
    if (this.isAuthenticated()) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  
}
