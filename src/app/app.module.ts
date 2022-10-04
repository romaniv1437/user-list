import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { initialState, InitialState, userReducer } from "../redux/reducers/userReducer";
import { ReactiveFormsModule } from "@angular/forms";
import { FindUsersComponent } from './components/find-users/find-users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUserDialogComponent } from './components/create-user/create-user-dialog/create-user-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { UserPageComponent } from './components/user-page/user-page.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { loadState } from "../redux/persist/persist-state";

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    FindUsersComponent,
    CreateUserDialogComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<InitialState>,
    private devTools: DevToolsExtension) {
    let enhancers: any = [];


    if (devTools.isEnabled()) {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }
    let persistedState = loadState();
    this.ngRedux.configureStore(
      userReducer,
      persistedState || initialState,
      [],
      enhancers);
  }
}

