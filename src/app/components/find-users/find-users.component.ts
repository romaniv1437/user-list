import { Component, OnInit } from '@angular/core';
import { NgRedux } from "@angular-redux/store";
import { InitialState } from "../../../redux/reducers/userReducer";
import { debounceTime, map } from "rxjs";
import { User } from "../../../interfaces/User";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-find-users',
  templateUrl: './find-users.component.html',
  styleUrls: [ './find-users.component.scss' ]
})
export class FindUsersComponent implements OnInit {


  public searchForm = new FormGroup({
    search: new FormControl('')
  })
  public users: User[] = [];
  public searchedUsers: User[] = [];

  constructor(private ngRedux: NgRedux<InitialState>, private router: Router) {
    this.ngRedux.select('users').pipe(map((users: any) => users)).subscribe(value => {
      this.users = value;
      this.searchedUsers = this.users;
    })
  }

  ngOnInit(): void {
    this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(600),
    ).subscribe((value: any) => {
      const searchedInput = value.toLowerCase()
      if (searchedInput) {
        this.searchedUsers = [ ...this.users ]
          .filter(user => user.email.toLowerCase()
            .includes(searchedInput)
          )
      } else {
        this.searchedUsers = this.users
      }
    })
  }
  navigateToUserPage(userId: string) {
    this.router
      .navigate([ `users/${userId}` ])
      .then(r => r);
  }
}
