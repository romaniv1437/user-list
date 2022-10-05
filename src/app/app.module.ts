import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initialState, InitialState, userReducer } from "../redux/reducers/userReducer";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { loadState } from "../redux/persist/persist-state";
import { SharedModule } from "./shared/shared.module";
import { UsersModule } from "./components/users.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgReduxModule,
    BrowserAnimationsModule,
    SharedModule,
    UsersModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
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

