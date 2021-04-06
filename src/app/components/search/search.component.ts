import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  countrylist = ['India','Australia','Germany','Argentina','Austria','Belgium',
          'Brazil','Bulgaria','Canada','China','Coloumbia','Egypt','France','Greece','Hong Kong','Indonesia','Ireland','Italy','Japan',
           'Malaysia','Mexico','New Zealand','Norway','Russia','South Africa','Sweden','United States Of America','Great Britain'];


  selectedCountryCode : string = '';
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  update(country : string){


    switch(country){
      case 'India':
        this.selectedCountryCode = 'in';
        break;
      case 'Australia':
        this.selectedCountryCode = 'au';
        break;
      case 'Germany':
        this.selectedCountryCode = 'de';
        break;
      case 'Argentina':
        this.selectedCountryCode = 'ar';
        break;
      case 'Austria':
        this.selectedCountryCode = 'at';
        break;
      case 'Belgium':
        this.selectedCountryCode = 'be';
        break;
      case 'Brazil':
        this.selectedCountryCode = 'br';
        break;
      case 'Bulgarial':
          this.selectedCountryCode = 'bg';
          break;
      case 'Canada':
            this.selectedCountryCode = 'ca';
            break;
      case 'China':
            this.selectedCountryCode = 'cn';
            break;
      case 'Coloumbia':
        this.selectedCountryCode = 'co';
        break;
      case 'Egypt':
        this.selectedCountryCode = 'eg';
        break;
      case 'France':
        this.selectedCountryCode = 'fr';
        break;
      case 'Greece':
        this.selectedCountryCode = 'gr';
        break;
      case 'Hong Kong':
        this.selectedCountryCode = 'hk';
        break;
      case 'Indonesia':
        this.selectedCountryCode = 'id';
        break;
      case 'Ireland':
        this.selectedCountryCode = 'ie';
        break;
      case 'Italy':
        this.selectedCountryCode = 'it';
        break;
      case 'Japan':
        this.selectedCountryCode = 'jp';
        break;
      case 'Malaysia':
        this.selectedCountryCode = 'my';
        break;
      case 'Mexico':
        this.selectedCountryCode = 'mx';
        break;
      case 'New Zealand':
        this.selectedCountryCode = 'nz';
        break;
      case 'Norway':
        this.selectedCountryCode = 'no';
        break;
      case 'Russia':
        this.selectedCountryCode = 'ru';
        break;
      case 'South Africa':
        this.selectedCountryCode = 'za';
        break;
      case 'Sweden':
        this.selectedCountryCode = 'se';
        break;
      case 'United States Of America':
        this.selectedCountryCode = 'us';
        break;
      case 'Great Britain':
        this.selectedCountryCode = 'gb';
        break;
      
      }

   this.ds.selected.next(this.selectedCountryCode);
   
  }
}
