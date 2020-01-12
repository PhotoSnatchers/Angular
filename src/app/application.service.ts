import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {

  constructor(
    private http: HttpClient,
  ) { }

  registerUser(form: any) {
    let params = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    }
    const url = 'http://localhost:3000/api/registration';
    return this.http.post<any>(url, params, httpOptions)
    .pipe(map(data => {
      return JSON.stringify(data);
    }));
  }

  viewUsers() {
    const url = 'http://localhost:3000/api';
    return this.http.get<any>(url)
    .pipe(map(data => {
      return data;
    }));
  }

}
