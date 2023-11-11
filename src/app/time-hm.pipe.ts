import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeHM'
})
export class TimeHMPipe implements PipeTransform {

  transform(time: number): string {
    let timeHoursMinutes:string=`${Math.floor(time/ 60)} h ${time % 60} m`
    return timeHoursMinutes;
  }

}
