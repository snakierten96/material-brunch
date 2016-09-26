import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { HttpModule }             from '@angular/http';
import { FormsModule }            from '@angular/forms';

import { NgRedux, NgReduxModule } from "ng2-redux";

import { MdSidenavModule }        from '@angular2-material/sidenav';
import { MdListModule }           from '@angular2-material/list';
import { MdToolbarModule }        from '@angular2-material/toolbar';
import { MdButtonModule }         from '@angular2-material/button';
import { MdInputModule }          from '@angular2-material/input'
import { MdCardModule }           from '@angular2-material/card';
import { MdIconModule }           from '@angular2-material/icon';
import { MdGridListModule }       from '@angular2-material/grid-list';

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
    MdSidenavModule.forRoot(),
    MdListModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdButtonModule.forRoot(),
    MdInputModule.forRoot(),
    MdCardModule.forRoot(),
    MdIconModule.forRoot(),
    MdGridListModule.forRoot(),
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
