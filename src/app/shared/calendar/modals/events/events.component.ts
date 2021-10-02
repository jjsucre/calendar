/* Modulo de Confirmacion usado en toda la aplicacion*/
import { Component,  EventEmitter, HostListener, Inject, OnInit  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
interface eventData {
  id: number,
  title: string,
  team1: string,
  team2: string,
  date: string

}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class ModalEventsComponent implements OnInit {
  private windowSize = window.innerWidth;
  public mobile = (window.innerWidth <= 812) ? true : false;
  public modalTitle = 'Event';
  public message = '';
  public frmMain: any =  FormGroup;
  formSaved = new EventEmitter();
  formDelete = new EventEmitter();
  public formData: any = {
    day: this.data.item.day,
    title: this.data.item.title,
    date: this.data.item.date,
  };
  @HostListener('window:resize') onResize() {
    this.resize();
  }
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalEventsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    get f() { return this.frmMain.controls; }
  ngOnInit(){
    this.createForm();
  }
  createForm() {
    this.frmMain = this.formBuilder.group({
      day: [this.formData.day, Validators.required],
      title: [this.formData.title, Validators.required,],
      date: [{ value: this.formData.date , disabled  : true}, Validators.required],
    });
  }
  save(form:eventData) {
    form.date = this.formData.date;
    form.team1 = form.title;
    form.team1 = form.title;
    this.formSaved.emit(form);
  }
  delete() {
    this.formDelete.emit();
  }
  resize() {
    this.windowSize = window.innerWidth;
    this.mobile = (this.windowSize <= 812) ? true : false;
  }
}

