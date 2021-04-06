import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  //display data
  bndisplay:any = [];

  constructor(private ds : DataService) { }

  ngOnInit(): void {
    this.ds.selected.subscribe(c=>{
      this.ds.businessnews(c).subscribe((res=>{
        this.bndisplay = res.articles;
      }))
    })
    
  }

}
