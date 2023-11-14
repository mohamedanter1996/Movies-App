import { Component,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {
  footerHieght:number={} as number;
@ViewChild('footer') myIdentifier: ElementRef ={} as ElementRef;
constructor(private _moviedataService:MoviedataService){

}
ngAfterViewInit(): void {
 this.footerHieght=this.myIdentifier.nativeElement.offsetHeight;
 console.log(this.footerHieght);
 this._moviedataService.footerHieght.next(this.footerHieght);  
}
}
