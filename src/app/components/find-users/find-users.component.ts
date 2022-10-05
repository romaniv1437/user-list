import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime } from "rxjs";

import { User } from "../../interfaces/User";
import { UserSelectors } from "../../../redux/selectors/userSelectors";

@Component({
  selector: 'app-find-users',
  templateUrl: './find-users.component.html',
  styleUrls: [ './find-users.component.scss' ]
})
export class FindUsersComponent implements OnInit {
  public users: User[] = [];
  public searchedUsers: User[] = [];
  public searchForm = new FormGroup({
    search: new FormControl('')
  })

  constructor(private userSelectors: UserSelectors) {
    this.users = userSelectors.getUsers();
    this.searchedUsers = this.users;
  };

  ngOnInit(): void {
    this.searchForm.controls.search.valueChanges
      .pipe(debounceTime(600))
      .subscribe((value: any) => {
        const searchedInput = value.toLowerCase() as string;
        if (!searchedInput) {
          return this.searchedUsers = this.users;
        }
        return this.searchUsers(searchedInput);
      });
  };

  private searchUsers(searchedInput: string): void {
    this.searchedUsers = [ ...this.users ]
      .filter(user => user.email.toLowerCase()
        .includes(searchedInput)
      );
  };
}
