import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from 'src/app/core/services/admin-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public form: FormGroup;

  constructor(public loginService: AdminLoginService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }

  submitForm() {
    this.loginService
    .login(this.form.get('email')?.value, this.form.get('password')?.value)
    .subscribe(response => {
      this.router.navigate(['/admin'])
      
    })
  }

}
