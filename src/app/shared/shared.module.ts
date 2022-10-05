import { NgModule } from "@angular/core";
import { ButtonWithNavigateComponent } from "./button-with-navigate/button-with-navigate.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [ ButtonWithNavigateComponent ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  exports: [ ButtonWithNavigateComponent ]
})
export class SharedModule {

}
