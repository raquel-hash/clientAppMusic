import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { ArtistsComponent } from './components/artists/artists.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsComponent
  },
  {
    path: ':id',
    component: ArtistDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ArtistRoutingModule {}
