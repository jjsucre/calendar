import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as moment from 'moment'

interface scheduleData {
  day: number,
  date: string,
  team1: string,
  team2: string,
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  public monthNames =  moment.months();
  public weekDays = moment.weekdays();
  public currentYear = moment().format('YYYY');
  public currentDay = moment().format('D');
  public currentMonth = moment().format('MM');
  public newMonth = this.currentMonth;
  public newYear = this.currentYear;
  public monthSelected: any  = [];
  public dateSelect: any;
  public dateValue: any;
  public dateSelected = 0;
  @Input() scheduleData = [];
  @Input() flag: boolean = false;
  constructor() {
    this.getDaysFromDate(this.currentMonth, this.currentYear);
  }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.scheduleData) {
      if (changes.scheduleData.isFirstChange()) {
        this.loadData(this.scheduleData);
      }
    }
  }
  getDaysFromDate(month: string, year: string) {
    const startDate = moment(`${year}/${month}`)
    const endDate = startDate.clone().endOf('month')
    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);
    this.dateSelect = startDate;
    const arrayDays = Object.keys([...Array(numberDays)]).map((day: any) => {
      day = parseInt(day) + 1;
      const dayObject = moment(`${year}-${month}-${day}`);
      return {
        name: dayObject.format("dddd"),
        value: day,
        index: dayObject.isoWeekday(),
        schedules:  []
      };
    });
    this.monthSelected = arrayDays;
  }

  changeMonth(action: string) {
    const newDate =  action === 'Prev' ? this.dateSelect.clone().subtract(1, "month"):  this.dateSelect.clone().add(1, "month");
    this.getDaysFromDate(newDate.format("MM"), newDate.format("YYYY"));
    this.newMonth = newDate.format("MM");
    this.newYear =  newDate.format("YYYY");
    this.loadData(this.scheduleData)
  }

  clickDay(day: any) {
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
    this.dateSelected = day.value
    console.log(day.schedules);
  }
  loadData(dateSchedule: any) {
    const obj = dateSchedule.filter((item: any)  => {
      item.day  = moment(item.date).format('D');
      return moment(item.date).format('YYYY') == this.newYear && moment(item.date).format('MM')  == this.newMonth;
    });
    this.setSchedule(obj);
  }
  setSchedule(data : any) {
    this.monthSelected.forEach((item: any) => {
        const obj = data.filter((element: any) => element.day == item.value)
        if (obj.length)  item.schedules = obj;
    });
  }
}
