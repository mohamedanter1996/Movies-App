import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviedataService {
footerHieght=new BehaviorSubject(0); 
navHieght =new BehaviorSubject(0);
searchKey=new BehaviorSubject('');
loading=new BehaviorSubject(false);
noSearch=new BehaviorSubject(false);
  constructor(private _httpClient:HttpClient) { }
  addMoviesToHome():Observable<any>
  {
    return this._httpClient.get("https://api.themoviedb.org/3/discover/movie?page=1&api_key=be7a8da49bb7fdcf675785c5a9ef39be")
  }

    addSpecificMoviePageToHome(page:number|undefined):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }
    addMoviesToNowPlay():Observable<any>
  {
    return this._httpClient.get("https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=be7a8da49bb7fdcf675785c5a9ef39be")
  }

    addSpecificMoviePageToNowPlay(page:number|undefined):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }

   addMoviesToPopular():Observable<any>
  {
    return this._httpClient.get("https://api.themoviedb.org/3/movie/popular?page=1&api_key=be7a8da49bb7fdcf675785c5a9ef39be")
  }

   addSpecificMoviePageToPopular(page:number|undefined):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }

   addMoviesToTopRated():Observable<any>
  {
    return this._httpClient.get("https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=be7a8da49bb7fdcf675785c5a9ef39be")
  }

  addSpecificMoviePageTopRated(page:number|undefined):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }

     addMoviesToUpComing():Observable<any>
  {
    return this._httpClient.get("https://api.themoviedb.org/3/movie/upcoming?page=1&api_key=be7a8da49bb7fdcf675785c5a9ef39be")
  }

       addSpecificMoviePageToUpComing(page:number|undefined):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?page=${page}&api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }

   getMovieDetailsData(movieId:string|null):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }

    getMovieDetailsKeyWords(movieId:string|null):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}/keywords?api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }

    getMovieDetailsCastActors(movieId:string|null):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }

     getMovieDetailsTrailerVideo(movieId:string|null):Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=be7a8da49bb7fdcf675785c5a9ef39be`)
  }
}
