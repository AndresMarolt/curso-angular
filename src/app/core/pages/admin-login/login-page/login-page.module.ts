import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginFormModule } from 'src/app/shared/components/login-form/login-form.module';
import { LoginPageRoutingModule } from './login-page-routing.module';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    LoginFormModule,
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
