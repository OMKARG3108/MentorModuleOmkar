import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userl: string = "";
  passl: string = "";
  error_stat: boolean = false;
  constructor(private route: Router, private loginstat: LoginService) { }

  ngOnInit(): void {
  }


  login(user: string, pass: string) {
    this.userl = "admin";
    this.passl = "admin";
    if (this.userl != user || this.passl != pass) {
      this.error_stat = true;
    }
    else if (this.userl == user || this.passl == pass) {
      this.loginstat.status(true);
      this.route.navigateByUrl("directory");
    }
  }
}
