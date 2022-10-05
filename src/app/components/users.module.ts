import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { UserPageComponent } from "./user-page/user-page.component";
import { FindUsersComponent } from "./find-users/find-users.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { CreateUserDialogComponent } from "./create-user/create-user-dialog/create-user-dialog.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { UserSelectors } from "../../redux/selectors/userSelectors";

@NgModule({
  declarations: [ UserPageComponent, FindUsersComponent, CreateUserComponent, CreateUserDialogComponent ],
  imports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    SharedModule,
    MatDialogModule
  ],
  providers: [ UserSelectors ],
  exports: [ UserPageComponent, FindUsersComponent, CreateUserComponent, CreateUserDialogComponent ]
})
export class UsersModule {

}
