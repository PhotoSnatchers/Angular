import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApplicationService } from '../../services/application.service';
import { first } from 'rxjs/operators';

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
        this.loginResponse = res.response;
      });
  }
}
