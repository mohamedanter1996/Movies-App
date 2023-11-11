import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { MoviedataService } from './moviedata.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private _moviedataService:MoviedataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._moviedataService.loading.next(true);
    return next.handle(request).pipe(
      finalize(()=>{
        this._moviedataService.loading.next(false);
      })
    );
  }
}
