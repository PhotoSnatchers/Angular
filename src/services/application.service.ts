import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApplicationService {
  public currentUser = new BehaviorSubject<any>('');
  constructor(
    private http: HttpClient,
  ) { }

  login(form: any) {
    let params = {
      email: form.value.email,
      password: form.value.password,
    }
    const url = 'http://localhost:3000/api/login';
    return this.http.post<any>(url, params, httpOptions)
    .pipe(map(data => {
      localStorage.setItem('userData', JSON.stringify(data));
      this.currentUser.next('userData');
      return data;
    }));
  }

  currentUserAsObservable() {
    return this.currentUser.asObservable();
  }

  registerUser(form: any) {
    let params = {
      name: form.value.name,
      email: form.value.email,
      password: form.value.password,
    }
    const url = 'http://localhost:3000/api/registration';
    return this.http.post<any>(url, params, httpOptions)
    .pipe(map(data => {
      return data;
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
