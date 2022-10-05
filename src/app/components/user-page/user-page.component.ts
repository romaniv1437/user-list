import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { UserSelectors } from "../../../redux/selectors/userSelectors";
import { User } from "../../interfaces/User";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: [ './user-page.component.scss' ]
})
export class UserPageComponent implements OnInit {

  public user = {} as User;

  constructor(private router: Router,
    private userSelectors: UserSelectors,
    private route: ActivatedRoute) {
    const userId = this.route.snapshot.paramMap.get('userId') as string ?? null;
    this.user = userSelectors.getUserById(userId);
  }

  ngOnInit(): void {
  }

}
