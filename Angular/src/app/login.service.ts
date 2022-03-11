import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  stat:boolean = false
  empdet:any;
  constructor() { }

  status( stat: boolean){
    if(stat){
      this.stat = true
    }
  }
  islogin(){
    if(this.stat){
      return true
    }else{
      return false
    }

  }
  emp_detail(empdet:any){
    this.empdet = empdet;
  }
  throw_detail(){
    return this.empdet;
  }
}
