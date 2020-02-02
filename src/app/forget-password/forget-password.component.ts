import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApplicationService } from '../../services/application.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
forgetPwdForm: any;
updateResponse: any;
  constructor(
    private form: FormBuilder,
    private application: ApplicationService,
    private router: Router,
    ) {
      this.forgetPwdForm = this.form.group({
        email: [''],
        password: [''],
        confirmPwd:[''],
      });
   }

  ngOnInit() {
  }
  onSubmit(form: any) {
    this.application.forgetPwd(form).pipe(first())
    .subscribe(
      (res: any) => {
      if(res){
        this.updateResponse = res.response;
      }
      });
  }
}
