import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-holiday-details',
  templateUrl: './holiday-details.component.html',
  styleUrls: ['./holiday-details.component.css']
})
export class HolidayDetailsComponent implements OnInit {
  @Input() holiday: {
    name: string;
    date: string;
    observed: string;
    public: boolean;
  };

  constructor() { }

  ngOnInit() {
  }

}
