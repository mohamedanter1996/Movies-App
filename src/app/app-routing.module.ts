import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpComingComponent } from './up-coming/up-coming.component';
import { HomeComponent } from './home/home.component';
import { PComponent } from './p/p.component';

const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:'full' },
  {path:"Home",component:HomeComponent},
  {path:"NowPlaying",component:NowPlayingComponent},
  {path:"Popular",component:PopularComponent},
  {path:"TopRated",component:TopRatedComponent},
  {path:"UpComing",component:UpComingComponent},
  {path:"movie/:id",component:MovieDetailsComponent},
  {path:"**",component:PComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
