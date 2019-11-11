import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistComponent } from './components/artist/artist.component';
import { ArtistDetailComponent } from './components/artist-detail/artist-detail.component';
import { ArtistsComponent } from './components/artists/artists.component';

import { ArtistRoutingModule } from './artist-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ArtistComponent,
    ArtistDetailComponent,
    ArtistsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArtistRoutingModule,
    MaterialModule
  ]
})
export class ArtistModule {

}
