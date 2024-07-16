import { Component, Injectable } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import {
  NgbCalendar,
  NgbCalendarPersian,
  NgbDatepickerI18n,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

const WEEKDAYS_SHORT = ['د', 'س', 'چ', 'پ', 'ج', 'ش', 'ی'];
const MONTHS = ['حمل', 'ثور', 'جوزا', 'سرطان', 'اسد', 'سنبله', 'میزان', 'عقرب', 'قوس', 'جدی', 'دلو', 'حوت'];

@Injectable()
export class NgbDatepickerI18nPersian extends NgbDatepickerI18n {
	getWeekdayLabel(weekday: number) {
		return WEEKDAYS_SHORT[weekday - 1];
	}
	getMonthShortName(month: number) {
		return MONTHS[month - 1];
	}
	getMonthFullName(month: number) {
		return MONTHS[month - 1];
	}
	getDayAriaLabel(date: NgbDateStruct): string {
		return `${date.year}-${this.getMonthFullName(date.month)}-${date.day}`;
	}
}

@Component({
  selector: 'app-persian-date',
  templateUrl: './persian-date.component.html',
  styleUrls: ['./persian-date.component.css'],
  providers: [
		{ provide: NgbCalendar, useClass: NgbCalendarPersian },
		{ provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian },
	],
})
export class PersianDateComponent {
  startDate: any;
}
