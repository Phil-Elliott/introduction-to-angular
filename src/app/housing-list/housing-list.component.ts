import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();

  constructor() {}

  ngOnInit(): void {}

  searchHousingLocations(searchInput: string) {
    if (!searchInput) return;

    this.results = this.locationList.filter((location) =>
      location.city.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
