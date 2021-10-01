import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalendarComponent } from '../app/shared/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleComponent } from './shared/schedule/schedule.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalEventsComponent } from './shared/calendar/modals/events/events.component';

import {MaterialModule} from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ScheduleComponent,
    ModalEventsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  entryComponents: [ModalEventsComponent],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
