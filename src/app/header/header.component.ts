import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profileName: any;
  constructor( 
    private application: ApplicationService,
    private router: Router,
) { }

  ngOnInit() {
    let res = JSON.parse(localStorage.getItem('userData'));
    this.profileName = res.email;
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('userData');
    this.application.currentUser.next(null);
    this.router.navigate(['/login']);
  }
}
