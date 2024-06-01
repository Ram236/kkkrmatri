import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [],
})
export class HomeComponent implements OnInit {
  userDetails: any;
  profiles:any[] = [];
  constructor(private as: AppService, private homeServive: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('user')!);
    //fetch cart count when user loggedin
    if (this.userDetails) {
      this.homeServive.getProfiles().subscribe((res) => {
        this.profiles = res;
      });
    }
  }

  gotoProfile(){
    this.router.navigate(['/profiles/create-profile']);
  }
}
