import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArtistFormComponent } from './components/artist-form/artist-form.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { TableComponent } from './components/table/table.component';
import { FormArtistComponent } from './components/form-artist/form-artist.component';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';


@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableComponent, DashboardComponent, ArtistFormComponent, ArtistsListComponent, FormArtistComponent, ArtistEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
