import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { FindUsersComponent } from "./components/find-users/find-users.component";
import { UserPageComponent } from "./components/user-page/user-page.component";

const routes: Routes = [
  {
    path: 'users',
    component: CreateUserComponent
  },
  {
    path: 'find',
    component: FindUsersComponent
  },
  {
    path: 'users/:userId',
    component: UserPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
