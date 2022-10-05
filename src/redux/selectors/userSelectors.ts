import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";

import { Observable } from "rxjs";

import { InitialState } from "../reducers/userReducer";
import { User } from "../../app/interfaces/User";
import { EStore } from "../../app/enums/EStore";

@Injectable()
export class UserSelectors {
  private users$: Observable<User[]>
  constructor(ngRedux: NgRedux<InitialState>) {
    this.users$ = ngRedux.select<User[]>(EStore.users)
  };
  getUserById(userId: string): User {
    let findUser = {} as User;
    this.users$
      .subscribe(value => findUser = value.find(findUser => findUser.id === userId) ?? { firstName: 'Not found' } as User)
      .unsubscribe()
    return findUser;
  };
  getUsers(): User[] {
    let users = [] as User[];
    this.users$
      .subscribe(value => users = value)
      .unsubscribe();
    return users;
  };
}
