import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'user-list';
  constructor(private location: Location) {
  }

  toPrevPage() {
    this.location.back();
  }
}
