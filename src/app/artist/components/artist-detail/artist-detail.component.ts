import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArtistsService } from '../../../core/services/artists/artists.service';
import { Artist } from '../../../core/models/artist.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  artist: Artist;

  constructor(
    private route: ActivatedRoute,
    private artistsService: ArtistsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fechProduct(id);
     // this.product = this.productsService.getProduct(id);
    });
  }
  fechProduct(id: number) {
    this.artistsService.getArtist(id)
      .subscribe(artist => {
        this.artist = artist;
      });
  }
  crearArtist() {
    const newArtist: Artist = {
      id: 7,
      firstName: 'Roger',
      lastName: 'Apaza',
      image: 'assets/images/camiseta.png',
      description: 'hola'
    };
    this.artistsService.createArtist(newArtist)
      .subscribe(artist => {
        console.log(artist);
      });
  }

  updateArtist() {
    const updateArtist: Partial<Artist> = {
      firstName: 'Amalia',
      image: 'assets/images/hoodie.png',
      description: 'Como estas'
    };
    this.artistsService.updateArtist(2, updateArtist)
      .subscribe(artist => {
        console.log(artist);
      });
  }
  deleteArtist() {
    this.artistsService.deleteArtist(2)
      .subscribe(rta => {
        console.log(rta);
      });
  }

}
