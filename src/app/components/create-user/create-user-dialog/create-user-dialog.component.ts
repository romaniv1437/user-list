import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { CreateUserDialog } from "../../../interfaces/CreateUserDialog";

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: [ './create-user-dialog.component.scss' ]
})
export class CreateUserDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreateUserDialog) {
  };

  onCloseDialog(): void {
    this.dialogRef.close();
  };
  onTyping(event: any, controlName: string): void {
    this.data[controlName as keyof CreateUserDialog].setValue(event.target.value);
  };
}
