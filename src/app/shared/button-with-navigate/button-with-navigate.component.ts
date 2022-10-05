import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

import { NavigateButton } from "../../interfaces/NavigateButton";

@Component({
  selector: 'app-button-with-navigate',
  template:
    `<button matSuffix mat-raised-button color="primary" (click)="navigateTo()">
        {{buttonData.title}}
        <mat-icon>{{buttonData.icon}}</mat-icon>
      </button>
    `,
  styleUrls: [ './button-with-navigate.component.scss' ]
})

export class ButtonWithNavigateComponent {
  @Input() buttonData = {} as NavigateButton;
  constructor(private router: Router) {
  }

  navigateTo() {
    this.router
      .navigate([ this.buttonData.link ])
      .then(r => r);
  }
}
