import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgRedux } from "@angular-redux/store";

import { CreateUserDialogComponent } from "./create-user-dialog/create-user-dialog.component";

import { InitialState } from "../../../redux/reducers/userReducer";
import { createUser } from "../../../redux/actions/actions";
import { User } from "../../../interfaces/User";
import { saveState } from "../../../redux/persist/persist-state";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: [ './create-user.component.scss' ]
})
export class CreateUserComponent implements OnInit {


  public existUsers: User[] = [];
  public dt = new Date();
  public padL = (nr: any, len = 2, chr = '0') => `${nr}`.padStart(2, chr);

  public createForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [ Validators.email, Validators.required ])
  })

  constructor(
    private ngRedux: NgRedux<InitialState>,
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.createForm.valueChanges.subscribe(value => console.log(value));
    this.ngRedux.select('users').subscribe((value: any) => this.existUsers = value);
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
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      if (this.createForm.controls.email.valid) {
        this.onSubmit()
      } else {
        alert('email invalid');
      }
    });
  }

  onSubmit(): void {
    if (this.existUsers.find(findUser => findUser.email === this.createForm.controls.email.value)) {
      alert('user already exist');
    } else {
      const user = {
        id: Date.now().toString(),
        firstName: this.createForm.controls.firstName.value,
        lastName: this.createForm.controls.lastName.value,
        email: this.createForm.controls.email.value,
        createdAt: `${this.dt.getFullYear()}-${this.padL(this.dt.getMonth() + 1)}-${this.padL(this.dt.getDate())} ${this.padL(this.dt.getHours())}:${this.padL(this.dt.getMinutes())}:${this.padL(this.dt.getSeconds())}`
      } as User
      this.ngRedux.dispatch(createUser(user))
      saveState(this.ngRedux.getState());
    }
  }
  navigateToFindPage(): void {
    this.router
      .navigate([ 'find' ])
      .then(r => r);
  }
}
