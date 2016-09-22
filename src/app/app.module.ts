import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpModule }       from '@angular/http';

import { MdSidenavModule }  from '@angular2-material/sidenav';
import { MdListModule }     from '@angular2-material/list';
import { MdToolbarModule }  from '@angular2-material/toolbar';
import { MdButtonModule }   from '@angular2-material/button';
import { MdInputModule }    from '@angular2-material/input'
import { MdCardModule }     from '@angular2-material/card';
import { MdIconModule }     from '@angular2-material/icon';

import { AppComponent }     from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdSidenavModule.forRoot(),
    MdListModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdButtonModule.forRoot(),
    MdInputModule.forRoot(),
    MdCardModule.forRoot(),
    MdIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
