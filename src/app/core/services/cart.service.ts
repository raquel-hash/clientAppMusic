import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Artist} from '../models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private artists: Artist[] = [];
  private cart = new BehaviorSubject<Artist[]>([]);
 cart$ = this.cart.asObservable();
  constructor() { }
  addCart(artist: Artist) {
    this.artists = [...this.artists, artist];
    this.cart.next(this.artists);
  }
}
