import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLogged: boolean = false
  constructor() {}
  isAutehticated(): boolean{
    return this._isLogged
  }

  login(): void {
    this._isLogged = true
    console.log('user logged in')
  }

  logout(): void{
    this._isLogged = false
    console.log('user logged out')
  }

  
}
