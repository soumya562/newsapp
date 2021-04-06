import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TopheadingComponent } from './components/topheading/topheading.component';
import { HeaderComponent } from './components/header/header.component';
import { ShortenPipe } from './shorten.pipe';
import { TechnewsComponent } from './components/technews/technews.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BusinessnewsComponent } from './components/businessnews/businessnews.component';
import { SearchComponent } from './components/search/search.component';
import { SportsComponent } from './components/sports/sports.component';
import { HealthComponent } from './components/health/health.component';
import { WeatherComponent } from './components/weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    HeaderComponent,
    ShortenPipe,
    TechnewsComponent,
    BusinessnewsComponent,
    SearchComponent,
    SportsComponent,
    HealthComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
