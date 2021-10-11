import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingInComponent } from './singIn/sing-in.component';
import {FormsModule} from "@angular/forms";
import { RegisterComponent } from './register/register.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    RegisterComponent,
    PersonComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
