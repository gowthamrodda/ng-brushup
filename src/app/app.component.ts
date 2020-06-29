import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { AutofillMonitor } from '@angular/cdk/text-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy  {
  title = 'test-app';
  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;

  @ViewChild('first', {read: ElementRef}) firstName: ElementRef<HTMLElement>;
  @ViewChild('last', {read: ElementRef}) lastName: ElementRef<HTMLElement>;

  constructor(private _autofill: AutofillMonitor) {}

  ngAfterViewInit() {
    this._autofill.monitor(this.firstName)
        .subscribe(e => this.firstNameAutofilled = e.isAutofilled);
    this._autofill.monitor(this.lastName)
        .subscribe(e => this.lastNameAutofilled = e.isAutofilled);
  }

  ngOnDestroy() {
    this._autofill.stopMonitoring(this.firstName);
    this._autofill.stopMonitoring(this.lastName);
  }
}
