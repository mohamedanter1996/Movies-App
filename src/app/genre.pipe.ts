import { Pipe, PipeTransform } from '@angular/core';
import { genre } from './movie-object';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(genres: genre[]): string {
   let genreName:string[]=[]
genres.forEach((genre:genre)=>{genreName.push(genre.name)})
    let genresName:string=genreName.slice().join(" ,");
    return genresName;
  }

}
