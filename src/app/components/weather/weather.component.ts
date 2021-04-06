import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
 
    cityName : string;
    temp: string;
    max_temp:string;
    min_temp:string;
    feels_like : string;
    weatherKind : string;// description
        
    windSpeed:string;
    windDirection : string;
    humidity : string;
    pressure : string;
    visibility : string;
    cloundPercentage : string;//in 
    
    flag : boolean = false;
  constructor(private ds : DataService) { }

  ngOnInit(): void {

  }
  update(city : string){
      this.ds.weathernews(city).subscribe(res=>{
        console.log(res);
       
         this.cityName= res.name;
         this.temp= res.main.temp,
         this.max_temp=res.main.temp_max,
          this.min_temp=res.main.temp_min,
          this.feels_like=res.main.feels_like,
          this.weatherKind=res.weather[0].description,
          this.windSpeed=res.wind.speed,
         this.windDirection= res.wind.deg,
          this.humidity=res.main.humidity,
          this.pressure=res.main.pressure,
          this.visibility=res.visibility,
          this.cloundPercentage = res.clouds.all

          this.flag = true;
          
      
        

      })
  }
}
