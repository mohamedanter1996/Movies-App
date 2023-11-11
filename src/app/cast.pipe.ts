import { Pipe, PipeTransform } from '@angular/core';
import { castActor } from './movie-object';

@Pipe({
  name: 'cast'
})
export class CastPipe implements PipeTransform {

  transform(cast: castActor[]): castActor[] {
    return cast.filter((castActor)=>{return castActor.profile_path !=null});
  }

}
