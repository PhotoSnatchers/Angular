import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApplicationService } from '../../services/application.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerResponse: any;
  constructor(
    private form: FormBuilder,
    private application: ApplicationService,
    ) {
    this.registerForm = this.form.group({
      name: [''],
      email: [''],
      password: [''],  
    });
   }

  ngOnInit() {
    this.application.viewUsers().pipe(first())
    .subscribe((res: any) => {
      console.log(res);
    });
  }
  onSubmit(registerForm: any) {
    this.application.registerUser(registerForm).pipe(first())
    .subscribe(
      (res: any) => {
        this.registerResponse = res.response;
      });
  }
  }