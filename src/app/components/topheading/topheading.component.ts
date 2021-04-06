import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  
  //display data
  topHeadingDisplay : any = [];

  constructor(private ds:DataService) { }

  ngOnInit(): void {
     this.ds.topHeadlines().subscribe((res=>{
       console.log(res);
       
       this.topHeadingDisplay = res.articles;
     }))
  }

}
