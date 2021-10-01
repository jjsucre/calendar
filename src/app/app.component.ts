import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calendar';
  public dateObj = {};
  constructor(private _mainService: AppService  ) {

  }
  ngOnInit(): void {

  }
  onReady() {
    this._mainService.getEvents()
    .subscribe(
      data => {
        this.dateObj = data;
      }
    )
  }
}
