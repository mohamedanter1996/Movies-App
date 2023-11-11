
import { Component,OnInit,AfterViewInit,ElementRef,ViewChild } from '@angular/core';
import { MoviedataService } from '../moviedata.service';
import { ActivatedRoute } from '@angular/router';
import { MovieObject,movieDetailsData,genre, keyword, castActor } from '../movie-object';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent  implements OnInit,AfterViewInit{
    addActorsNumber:number={} as number;
    trailerVideoContainerHeight:number={} as number;
    trailerVideoContainerWidth:number={} as number;
  movieVideoKey:string={} as string;
    num:number=12;
    realCastActorsNumber:number=0;
    cast:castActor[]=[];
  movieKeyWords:keyword[]=[];
    bgMovieDetailsLayer:string="";
    movieDetailsData:movieDetailsData={} as movieDetailsData;
    movieId:string|null="";
navhieghtValue:string="";
data: any;

    options: any;
    @ViewChild('trailerVideoContainer') myIdentifier: ElementRef ={} as ElementRef;
constructor(private _moviedataService:MoviedataService,private _activatedRoute:ActivatedRoute){}

ngOnInit(): void {
  const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);


    this._moviedataService.navHieght.subscribe({
      next:(value)=>{
console.log(value);
this.navhieghtValue=`margin-top: calc(${value}px + 2.5%)`;
      }
    });

    this._activatedRoute.paramMap.subscribe((params)=>{
    console.log(params.get('id'));
    this.movieId=params.get('id');
   
    this._moviedataService.getMovieDetailsData(params.get('id')).subscribe({
        next:(response)=>{
            console.log(response);
            this.movieDetailsData=response;
            this.bgMovieDetailsLayer=` background-image: url(https://image.tmdb.org/t/p/w500/${this.movieDetailsData.backdrop_path});
    background-position: top center;
    background-size: 100%;
      background-repeat: no-repeat;`
this.movieDetailsData.vote_average=Math.round(this.movieDetailsData.vote_average*10);

const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
         
            datasets: [
                {
                    data: [this.movieDetailsData.vote_average, 100-this.movieDetailsData.vote_average],
                    backgroundColor: ["#0D6EFD", "white"],
                    hoverBackgroundColor: ["#7ED8EF", "gold"]
                }
            ]
        };


        this.options = {
            cutout: '80%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };

        },
        error:(error)=>{
            console.log(error);
        }
    });
    this._moviedataService.getMovieDetailsKeyWords(params.get('id')).subscribe({
        next:(response)=>{
            console.log(response.keywords);
this.movieKeyWords=response.keywords;

        },
        error:(error)=>{
            console.log(error);
        }
    });
    this._moviedataService.getMovieDetailsCastActors(params.get('id')).subscribe({
        next:(response)=>{
            console.log(response.cast);
            this.realCastActorsNumber=response.cast.filter((actor:castActor)=>{return actor.profile_path !=null}).length;
            console.log( this.realCastActorsNumber);
            this.cast=response.cast.filter((actor:castActor)=>{return actor.profile_path !=null});
            console.log(this.cast);
            this.cast.length= this.realCastActorsNumber>12?12:this.realCastActorsNumber;
            this.addActorsNumber=Math.floor( this.realCastActorsNumber/12);
            console.log(this.addActorsNumber);

        },
        error:(error)=>{
            console.log(error);
        }
    })
      this._moviedataService.getMovieDetailsTrailerVideo(params.get('id')).subscribe({
        next:(responsre)=>{
            
            console.log(responsre.results[responsre.results.length-1].key);
            console.log(responsre);
            this.movieVideoKey=responsre.results[responsre.results.length-1].key;
        },
        error:(error)=>{
            console.log(error);
        }
    })
   
})

    




  }

  ngAfterViewInit(): void {
      this.trailerVideoContainerHeight=this.myIdentifier.nativeElement.offsetHeight;
      this.trailerVideoContainerWidth=this.myIdentifier.nativeElement.offsetWidth;
      console.log(this.trailerVideoContainerHeight,this.trailerVideoContainerWidth);
  }

addMoreActorsToShow(num:number){
    this._moviedataService.getMovieDetailsCastActors(this.movieId).subscribe({
        next:(response)=>{
            console.log(response.cast);
            this.realCastActorsNumber=response.cast.filter((actor:castActor)=>{return actor.profile_path !=null}).length;
            this.cast=response.cast.filter((actor:castActor)=>{return actor.profile_path !=null});
            this.cast.length=num;
            console.log(num);
            console.log(this.realCastActorsNumber);

        },
        error:(error)=>{
            console.log(error);
        }
    })
}


    
}
