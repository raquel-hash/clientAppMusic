import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Artist } from '../../models/artist.model';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  constructor(private http: HttpClient) { }

  getAllArtist() {
    return this.http.get<Artist[]>(`${environment.url_api}/get`);
  }

  getArtist(id: number) {
    return this.http.get<Artist>(`${environment.url_api}/${id}`);
  }

  createArtist(product: Artist) {
    return this.http.post(`${environment.url_api}/store`, product);
  }
  updateArtist(id: number, changes: Partial<Artist> ) {
    return this.http.put(`${environment.url_api}/edit/${id}`, changes);
  }
  deleteArtist(id: number) {
    return this.http.delete(`${environment.url_api}/destroy/${id}`);
  }
}
