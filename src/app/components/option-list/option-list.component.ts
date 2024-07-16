import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent {
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  filteredOptions = [...this.options];
  searchControl = new FormControl('');

  constructor() {
    this.searchControl.valueChanges.subscribe(value => this.filterOptions(value));
  }

  filterOptions(query: string | null) {
    if (query === null) {
      this.filteredOptions = [...this.options];
    } else {
      this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(query.toLowerCase()));
    }
  }
}