import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-list';
  constructor(private route:Router, private location: Location) {
  }

  toCreateUserPage() {
    this.route.navigate(['/users']).then(r => r)
  }
  toFindUserPage() {
    this.route.navigate(['/find']).then(r => r)
  }
  toPrevPage() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}
