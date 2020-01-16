import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApplicationService } from '../../services/application.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginResponse: any;

  constructor(
    private form: FormBuilder,
    private application: ApplicationService,
    private router: Router,
  ) {
    this.loginForm = this.form.group({
      email: [''],
      password: [''],  
    });
   }

  ngOnInit() {
  }
  onSubmit(loginForm: any) {
    this.application.login(loginForm).pipe(first())
    .subscribe(
      (res: any) => {
      if(res.response === "login success") {
        this.router.navigate(['dashboard']);
      } else {
        this.loginResponse = res.response;
      }
      });
  }
}
