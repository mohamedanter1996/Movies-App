import { Pipe, PipeTransform } from '@angular/core';
import { keyword } from './movie-object';

@Pipe({
  name: 'keywordname'
})
export class KeywordnamePipe implements PipeTransform {

  transform(keywords: keyword[]): string[] {
    let keywordsNames:string[]=[];
    keywords.forEach((keyword:keyword)=>{keywordsNames.push(keyword.name)})
    return keywordsNames;
  }

}
