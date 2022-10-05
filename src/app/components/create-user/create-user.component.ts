import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgRedux } from "@angular-redux/store";

import { CreateUserDialogComponent } from "./create-user-dialog/create-user-dialog.component";
import { UserSelectors } from "../../../redux/selectors/userSelectors";

import { createUser } from "../../../redux/actions/actionsTypes";
import { saveState } from "../../../redux/persist/persist-state";

import { CreateUserDialog } from "../../interfaces/CreateUserDialog";
import { InitialState } from "../../../redux/reducers/userReducer";
import { User } from "../../interfaces/User";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: [ './create-user.component.scss' ]
})
export class CreateUserComponent implements OnInit {
  public existUsers: User[] = [];

  public createForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [ Validators.email, Validators.required ])
  })

  constructor(
    private ngRedux: NgRedux<InitialState>,
    public dialog: MatDialog,
    private userSelectors: UserSelectors
  ) {
    this.existUsers = userSelectors.getUsers();
  }

  ngOnInit(): void {
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        firstName: this.createForm.controls.firstName,
        lastName: this.createForm.controls.lastName,
        email: this.createForm.controls.email
      } as CreateUserDialog
    });
    dialogRef.afterClosed().subscribe(() => {
      if (!this.createForm.controls.email.valid) {
        return alert('email invalid');
      }
      return this.createUser();
    });
  }

  createUser(): void {
    const isUserExist = this.existUsers.find(findUser => findUser.email === this.createForm.controls.email.value);
    if (isUserExist) {
      return alert('user already exist');
    }
    const user = {
      id: Date.now().toString(),
      firstName: this.createForm.controls.firstName.value,
      lastName: this.createForm.controls.lastName.value,
      email: this.createForm.controls.email.value,
      createdAt: this.getActualDate()
    } as User
    this.ngRedux.dispatch(createUser(user))
    saveState(this.ngRedux.getState());
  }

  getActualDate(): string {
    const dt = new Date();
    const padL = (nr: any, len = 2, chr = '0') => `${nr}`.padStart(2, chr);
    return `${dt.getFullYear()}-${padL(dt.getMonth() + 1)}-${padL(dt.getDate())} ${padL(dt.getHours())}:${padL(dt.getMinutes())}:${padL(dt.getSeconds())}`
  }
}

