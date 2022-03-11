import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-employee-directory',
  templateUrl: './employee-directory.component.html',
  styleUrls: ['./employee-directory.component.css']
})
export class EmployeeDirectoryComponent implements OnInit {
  empdet:any = "";
  detstat : boolean = true;

  constructor(private route : Router, private loginstat : LoginService) {
    this.empdet = this.loginstat.throw_detail();
    if(this.empdet == undefined){
      this.detstat = false;
    }
  }

  ngOnInit(): void {
    if(!this.loginstat.islogin()){
      this.route.navigate(["/login"]);
    }
  }
}
