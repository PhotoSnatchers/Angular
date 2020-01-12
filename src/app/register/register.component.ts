import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApplicationService } from '../application.service';
import { HttpClientModule } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private form: FormBuilder,
    private application: ApplicationService,
    private http: HttpClientModule,
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
        console.log(res);
      });
  }}
