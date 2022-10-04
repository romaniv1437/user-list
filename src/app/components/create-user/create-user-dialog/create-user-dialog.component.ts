import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss']
})
export class CreateUserDialogComponent  {
  constructor(public dialogRef: MatDialogRef<CreateUserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onTyping(event: any, controlName: string): void {
    switch (controlName) {
      case 'firstName':
        this.data.firstName.setValue(event.target.value)
        break;
      case 'lastName':
        this.data.lastName.setValue(event.target.value)
        break;
      case 'email':
        this.data.email.setValue(event.target.value)
        break;
      default:
        break
    }
  }
}
