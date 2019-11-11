import { Component, OnInit } from '@angular/core';
import {ArtistsService} from './../../../core/services/artists/artists.service';
import {Artist} from './../../../core/models/artist.model';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {

  private artists: Artist[] = [];
  displayedColumns: string[] = ['id', 'name', 'lastName', 'actions'];
  constructor(private artistsService: ArtistsService) { }

  ngOnInit() {
    this.fetchArtists();
  }
  fetchArtists() {
    this.artistsService.getAllArtist().subscribe(artists => {
      this.artists = artists;
      // console.log(products);
    } );
  }
  deleteAtist(id: number) {
    this.artistsService.deleteArtist(id)
      .subscribe(rta => {
        this.fetchArtists();
      });
  }
  updateArtist() {
    console.log('hi');
  }
}
