import { HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {LoginService} from '../common/login-service/login.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {};
 // token: any = localStorage.getItem('access-token');
  form: FormGroup;
  loginInvalid: boolean;

  body: URLSearchParams = new URLSearchParams();

  constructor(private service: LoginService,
              private fb: FormBuilder,
              private router: Router
  ) {
  }

  public getAccessToken() {
    this.loginInvalid = false;
    let loginAttempt: boolean = false;
    if (this.form.valid) {
      const username = this.form.get('userName').value;
      const password = this.form.get('password').value;
      this.body.set('userName', username);
      this.body.set('password', password);
      this.service.login(this.body.toString()).subscribe(
        (data: HttpResponse<any>) => {
          console.log(data.body);
          console.log(data.status);
          localStorage.setItem('access-token',JSON.stringify(data.body.accessTtoken))

          this.router.navigate(['products']).then(r => {
            loginAttempt = true;
            localStorage.setItem('authenticated', String(loginAttempt));
            console.log(r);
          });
          // loginAttempt = true;
        }, err => {
          console.log(err);
          this.loginInvalid = true;
          console.log(this.loginInvalid);
        }
      );
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: [''],
      password: ['', Validators.required]
    });
    this.service.checkAuthentication('/products')


  }

}
