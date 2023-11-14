import { Component,OnInit } from '@angular/core';
import { MoviedataService } from './moviedata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movie-app';
 navhieghtValue:string="";
 footerHieghtValue:string="";
loading:boolean=false;
 constructor(private _moviedataService:MoviedataService) {

  }
ngOnInit(): void {
     this._moviedataService.navHieght.subscribe({
      next:(value)=>{
console.log(value);
this.navhieghtValue=`margin-top: calc(${value}px + 2.5%)`;
this._moviedataService.footerHieght.subscribe({
      next:(value)=>{
        console.log(value);
this.footerHieghtValue=`margin-bottom: calc(${0}px);${this.navhieghtValue};`;
      }
    })
      }
    })
     this._moviedataService.loading.subscribe({
      next:(value)=>{
        this.loading=value;
      }
    })
}
  
}
