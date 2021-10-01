import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalEventsComponent as MainModal } from './modals/events/events.component'

import * as moment from 'moment'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnChanges {
  private windowSize = window.innerWidth;
  public mobile = (window.innerWidth <= 812) ? true : false;
  public monthNames =  moment.months();  weekDays = moment.weekdays();
  public currentYear = moment().format('YYYY');  currentMonth = moment().format('MM');  currentDay = moment().format('D');
  public dataMonth: any  = []; dateSelect: any; public dateValue: any; public objEvents: any = []
  public newYear = this.currentYear; newMonth = this.currentMonth;
  public monthSelected = this.currentMonth;
  public daySelected: number = 0; public objDay: any = [] ;
  public flagToday = true;
  public objScheduleData: any = []
  public ready = false;
  @Input() scheduleData: any = [];
  @Input() flag: boolean = false;
  @Output() onReady = new EventEmitter();

  constructor(private dialog: MatDialog,) {
    this.geDays(this.currentMonth, this.currentYear);
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.flag = true;
    this.onReady.emit();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.scheduleData) {
      if (!changes.scheduleData.isFirstChange() && changes.scheduleData.currentValue.length > 0 && this.flag) {
        this.objScheduleData = this.scheduleData;
        this.loadData(this.objScheduleData);
      }
    }
    this.dayClicked(this.dataMonth.find( (item : any)  =>  item.value == this.currentDay));
  }
  geDays(month: string, year: string) {
    const startDate = moment(`${year}/${month}`)
    const endDate = startDate.clone().endOf('month')
    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);
    this.dateSelect = startDate;
    const arrayDays = Object.keys([...Array(numberDays)]).map((day: any) => {
      day = parseInt(day) + 1;
      const dayObject = moment(`${year}-${month}-${day}`);
      return {
        year: dayObject.format("YYYY"),
        name: dayObject.format("dddd"),
        month: dayObject.format("MM"),
        value: day,
        index: dayObject.isoWeekday(),
        schedules:  []
      };
    });
    this.dataMonth = arrayDays;
  }

  changeMonth(action: string) {
    const newDate =  action === 'Prev' ? this.dateSelect.clone().subtract(1, "month"):  this.dateSelect.clone().add(1, "month");
    this.geDays(newDate.format("MM"), newDate.format("YYYY"));
    this.newMonth = newDate.format("MM");
    this.newYear =  newDate.format("YYYY");
    this.loadData(this.objScheduleData)
  }

  dayClicked(day: any) {
    this.objDay = day;
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day.value}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
    this.objEvents =  day.schedules;
    this.daySelected = day.value
    this.currentYear = day.year;
    this.monthSelected = this.dateSelect.format('MM')
  }
  loadData(scheduleData: any) {
    const obj = scheduleData.filter((item: any)  => {
      item.day  = moment(item.date).format('D');
      item.title = item.title ?  item.title:item.team1 + ' x ' + item.team2;
      return moment(item.date).format('YYYY') == this.newYear && moment(item.date).format('MM')  == this.newMonth;
    });
    this.setSchedule(obj);
  }
  setSchedule(data : any) {
    this.dataMonth.forEach((item: any) => {
        const obj = data.filter((element: any) => element.day == item.value);
        if (obj.length)  item.schedules = obj;
    });
  }

  openDialog(obj:any = []) {
    const edit = !obj ? false: true;
    const indexEvent = this.objEvents.indexOf(obj);
    const indexSchedule = this.objScheduleData.indexOf(obj);
    const date = obj.date ? obj.date: this.dateValue.format('YYYY-MM-DD');
    let dialogRef: any;
    const className = this.mobile === true ? 'full-screen-modal' : '';
    let config = new MatDialogConfig();
    config = {
        disableClose: false,
        width: '350px',
        panelClass: className,
        data: {
            item: {
              edit: edit,
              day: this.dateValue.format('DD'),
              title: obj.title,
              date: date
            },
        }
    };
      dialogRef = this.dialog.open(MainModal, config);
      const dialogAccept = dialogRef.componentInstance.formSaved
      .subscribe((data: any )=> {
        const  set =  () => {
          this.objScheduleData.push(data);
          this.objEvents.push(data);
        }
        const  update = () => {
          obj.title = data.title;
        }
        !obj.day ? set(): update();
        dialogRef.close();
      });
      const dialogDelete = dialogRef.componentInstance.formDelete
      .subscribe((data: any )=> {
        this.objEvents.splice(indexEvent,1);
        this.objScheduleData.splice(indexSchedule,1);
        dialogRef.close();
      });
      dialogRef.afterClosed().subscribe((result:any) => {
        dialogAccept.unsubscribe();
      });
  }

}
