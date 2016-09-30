import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';
import { MaterialModule }         from '@angular/material';

import { NgRedux, NgReduxModule } from "ng2-redux";

import { AppComponent }           from './app.component';
import {
  LineupComponent,
  TableComponent,
  MenuComponent,
  OrdersComponent,
  InventoryComponent
} from './components';

import { PartyService } from './services';
import { LineupActions, TableActions } from './actions';

@NgModule({
  declarations: [
    AppComponent,
    LineupComponent,
    TableComponent,
    MenuComponent,
    OrdersComponent,
    InventoryComponent
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
