import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private route : Router,private detail : LoginService) { }

  ngOnInit(): void {
    if(!this.detail.islogin()){
      this.route.navigate(["login"]);
    }
  }
  add_emp(empform:any){
    this.detail.emp_detail(empform.value);
    this.route.navigate(['directory']);
  }

}
