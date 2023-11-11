import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit ,OnInit{
 searchKey:string=""; 
 loading:boolean=false;
 constructor(private _moviedataService:MoviedataService){}
@ViewChild('nav') myIdentifier: ElementRef ={} as ElementRef;
hieght:number=0;
ngOnInit(): void {
    this._moviedataService.loading.subscribe({
      next:(value)=>{
        this.loading=value;
      }
    })
}
  ngAfterViewInit(): void {
      this.hieght=this.myIdentifier.nativeElement.offsetHeight;
      console.log(this.hieght);
      this._moviedataService.navHieght.next(this.hieght);
       

     
  }

  searchForMove(value:any){
console.log(value.target.value);
this._moviedataService.searchKey.next(value.target.value);
  }
}
