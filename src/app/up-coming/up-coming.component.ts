import { Component,OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { MovieObject, PageEvent } from '../movie-object';
@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
  styleUrls: ['./up-coming.component.css']
})
export class UpComingComponent implements OnInit {
first: number = 0;
searchKey:string="";
    rows: number = 10;
moviesList:MovieObject[]=[];  
navhieghtValue:string="";
constructor(private _moviedataService:MoviedataService){}
ngOnInit(): void {
    this._moviedataService.navHieght.subscribe({
      next:(value)=>{
console.log(value);
this.navhieghtValue=`margin-top: calc(${value}px + 2.5%)`;
      }
    })

        this._moviedataService.addMoviesToUpComing().subscribe({
      next:(response)=>{
        console.log(response.results);
        this.moviesList=response.results;

      },
      error:(error)=>{
console.log(error);
      }
    })

       this._moviedataService.searchKey.subscribe({
      next:(value)=>{
        this.searchKey=value;
      }
    })
}


onPageChange($event:PageEvent) {
       console.log($event.first,$event.rows,$event.page,$event.pageCount);
       this._moviedataService.addSpecificMoviePageToUpComing($event.page!=undefined?$event.page+1:$event.page).subscribe({
         next:(response)=>{
        console.log(response.results);
        this.moviesList=response.results;

      },
      error:(error)=>{
console.log(error);
      }
       })
       
    }
}