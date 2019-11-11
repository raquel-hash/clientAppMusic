import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/get`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  createArtist(product: Product) {
    return this.http.post(`${environment.url_api}/store`, product);
  }
  updateArtist(id: number, changes: Partial<Product> ) {
    return this.http.put(`${environment.url_api}/edit/${id}`, changes);
  }
  deleteArtist(id: number) {
    return this.http.delete(`${environment.url_api}/destroy/${id}`);
  }
}
