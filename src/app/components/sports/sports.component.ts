import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  spdisplay : any = [];

  constructor(private ds : DataService) { }

  ngOnInit(): void {
    this.ds.selected.subscribe(c=>{
      this.ds.sportsnews(c).subscribe(
        (res=>{
           this.spdisplay = res.articles;
        })
      )
    })
    
  }

}
