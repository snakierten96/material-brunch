import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';
import { MaterialModule }         from '@angular/material';

import { NgRedux, NgReduxModule } from "ng2-redux";

import { AppComponent }           from './app.component';
import { LineupComponent }        from './lineup';
import { TableComponent }         from './table';
import { MenuComponent }          from './menu';
import { OrdersComponent }        from './orders';

import { PartyService }           from './party/party.service';
import { LineupActions, TableActions } from './actions';

@NgModule({
  declarations: [
    AppComponent,
    LineupComponent,
    TableComponent,
    MenuComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MaterialModule.forRoot(),
    NgReduxModule
  ],
  providers: [
    PartyService,
    LineupActions,
    TableActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
