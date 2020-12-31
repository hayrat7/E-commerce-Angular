import {Component, OnInit} from '@angular/core';
import {LoginService} from './common/login-service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-comm-App';
  constructor(private service: LoginService) {
  }

  logOut() {
    this.service.logOut();

  }

  ngOnInit(): void {

  }

  getCaddy() {
    this.service.navigate('caddy')
  }
}
