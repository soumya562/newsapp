import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface responseData {
  articles : [];
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  selected = new Subject<string>();
  
  constructor(private http:HttpClient) { }

  //top headlines
  topHeadlines(){
    return this.http.get<responseData>('https://newsapi.org/v2/top-headlines?country=in&apiKey=80b6c340a6e441e39181d421df7d861d');
  }

  //tech news & country-wise
  technews(countryCode : string){
    return this.http.get<responseData>(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=technology&apiKey=80b6c340a6e441e39181d421df7d861d`);
  }

  //business-news
  businessnews(countryCode : string){
    return this.http.get<responseData>(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=business&apiKey=80b6c340a6e441e39181d421df7d861d`);

  }
  //sports news
  sportsnews(countryCode:string){
    return this.http.get<responseData>(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=80b6c340a6e441e39181d421df7d861d`);
  }

  //health news
  healthnews(countryCode:string){
    return this.http.get<responseData>(`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=health&apiKey=80b6c340a6e441e39181d421df7d861d`);
  }

  //weather news
  weathernews(city:string){
    return this.http.get<any>(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c261232d5300962d1640130da3e22a96`,
    {
      params: new HttpParams().set('units','metric')
    });
  }
  
}
