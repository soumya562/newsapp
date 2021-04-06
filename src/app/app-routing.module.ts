import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './components/businessnews/businessnews.component';
import { HealthComponent } from './components/health/health.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnewsComponent } from './components/technews/technews.component';
import { TopheadingComponent } from './components/topheading/topheading.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path:'',component:TopheadingComponent,pathMatch:'full'},// home
  { path : 'tech',component:TechnewsComponent} ,//tech news
  { path : 'business', component:BusinessnewsComponent},// business news
  { path : 'sports' , component:SportsComponent},//sports news
  { path : 'health' , component :HealthComponent}, //health news
  { path: 'weather' , component : WeatherComponent}, //weather news
   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
