import { Component, OnInit } from '@angular/core';
import { Location } from './location';
import { LocationService } from './locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [LocationService]
})
export class LocationsComponent implements OnInit {

  locations: Location[] = [];

  page: number = 1;

  searchedName: string = '';

  constructor(private theLocations: LocationService) { }

  ngOnInit(): void {
    this.theLocations.getLocations(this.page).subscribe((locationsData: any) => this.locations = locationsData.results)
  }
  
  nextPage() {
    if(this.page == 7){
      this.page = 7
    }else{
      this.page++;
      this.theLocations.getLocations(this.page).subscribe((locationsData: any) => this.locations = locationsData.results)
    }
  }

  prevPage() {
    if(this.page == 1){
      this.page = 1
    }else{
      this.page--;
      this.theLocations.getLocations(this.page).subscribe((locationsData: any) => this.locations = locationsData.results)
    }
  }

  searchName(){
    this.theLocations.getName(this.searchedName).subscribe((locationsData: any) => this.locations = locationsData.results)
    console.log(this.searchedName);
  }
}
