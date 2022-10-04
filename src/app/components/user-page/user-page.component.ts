import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { NgRedux } from "@angular-redux/store";
import { map } from "rxjs";

import { InitialState } from "../../../redux/reducers/userReducer";
import { User } from "../../../interfaces/User";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  public user = {} as User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private ngRedux: NgRedux<InitialState>,) {
    const userId = this.route.snapshot.paramMap.get('userId') as string ?? false;
    this.ngRedux.select<User[]>('users')
      .pipe(
        map(value => this.user = value.filter(user => user.id === userId)[0])
      ).subscribe()
  }

  ngOnInit(): void {
  }

}
