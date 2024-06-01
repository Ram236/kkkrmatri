import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles-home',
  templateUrl: './profiles-home.component.html',
  styleUrls: ['./profiles-home.component.scss'],
})
export class ProfilesHomeComponent implements OnInit {
  ngOnInit(): void {
    console.log('hi');
  }
}
