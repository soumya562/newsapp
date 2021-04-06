import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  //display data
  technewsDisplay : any = [];
  // selectedCountry : string = '';

  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.ds.selected.subscribe(c=>{
      this.ds.technews(c).subscribe(
        (res=>{
           this.technewsDisplay = res.articles;
        })
      )
    });
    
  }

}
