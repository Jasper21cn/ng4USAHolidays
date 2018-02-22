import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayDetailsComponent } from './holiday-details/holiday-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidayListComponent,
    HolidayDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
