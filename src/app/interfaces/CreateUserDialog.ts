import { FormControl } from "@angular/forms";

export interface CreateUserDialog {
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
}
