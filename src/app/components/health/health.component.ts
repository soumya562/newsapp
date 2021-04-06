import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  hdisplay : any = [];
  constructor(private ds : DataService) { }

  ngOnInit(): void {
    this.ds.selected.subscribe(c=>{
      this.ds.healthnews(c).subscribe((res=>{
        this.hdisplay = res.articles;
      }))
    })
    
  }

}
