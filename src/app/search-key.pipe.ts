import { Pipe, PipeTransform } from '@angular/core';
import { MovieObject } from './movie-object';

@Pipe({
  name: 'searchKey'
})
export class SearchKeyPipe implements PipeTransform {

  transform(movies:MovieObject[], searchKey:string): MovieObject[] {
    return movies.filter((movie)=>{return movie.title.toLowerCase().includes(searchKey.toLowerCase())});
  }

}
