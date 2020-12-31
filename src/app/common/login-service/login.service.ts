import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpService} from '../httpService';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
              private router: Router,
              private service:HttpService
              ) {
  }
  loginUrl='http://localhost:8070/login'


  public login(request) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this.service.post(this.loginUrl,request,headers)
  }
  logOut(){
    localStorage.removeItem('authenticated')
    this.router.navigate(['/login'])

  }

  public checkAuthentication(path){
    if (localStorage.getItem('authenticated') !=null){
      this.router.navigate([path]);
    }
    else {
      this.router.navigate(['login']);
    }
}
navigate(path){
    this.router.navigate([path])
}
}
