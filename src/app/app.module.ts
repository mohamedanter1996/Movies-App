import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatorModule } from 'primeng/paginator';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpComingComponent } from './up-coming/up-coming.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PComponent } from './p/p.component';
import { SearchKeyPipe } from './search-key.pipe';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GenrePipe } from './genre.pipe';
import { TimeHMPipe } from './time-hm.pipe';
import { KeywordnamePipe } from './keywordname.pipe';
import { CastPipe } from './cast.pipe';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoaderInterceptor } from './loader.interceptor';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
  
    NowPlayingComponent,
    PopularComponent,
    TopRatedComponent,
    UpComingComponent,
    NavbarComponent,
    HomeComponent,
    PComponent,
    SearchKeyPipe,
    MovieDetailsComponent,
    GenrePipe,
    TimeHMPipe,
    KeywordnamePipe,
    CastPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PaginatorModule,
    BrowserAnimationsModule,
    FormsModule,
    ChartModule,
    YouTubePlayerModule,
    MatProgressSpinnerModule

 
   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

