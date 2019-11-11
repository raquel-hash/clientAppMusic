import { Component, OnInit } from '@angular/core';

import { Artist } from '../../../core/models/artist.model';
import {ArtistsService} from '../../../core/services/artists/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.fetchArtists();
  }

  clickArtist(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchArtists() {
    this.artistsService.getAllArtist().subscribe(artists => {
     this.artists = artists;
      // console.log(products);
    } );
  }
}
