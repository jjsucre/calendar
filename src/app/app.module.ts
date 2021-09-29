import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalendarComponent } from '../app/shared/calendar/calendar.component';
import { MatIconModule } from '@angular/material/icon';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ScheduleComponent } from './shared/schedule/schedule.component';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  exports: [
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
