import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDirectoryComponent } from './employee-directory/employee-directory.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"", redirectTo:'login' , pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"directory",component:EmployeeDirectoryComponent},
  {path:"add",component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
