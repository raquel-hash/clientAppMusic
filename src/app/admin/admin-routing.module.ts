import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistFormComponent } from './components/artist-form/artist-form.component';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { FormArtistComponent } from './components/form-artist/form-artist.component';
import { ArtistEditComponent } from './components/artist-edit/artist-edit.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import {ArtistsService} from '../core/services/artists/artists.service';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ArtistFormComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'artists',
        component: ArtistsListComponent
      },
      {
        path: 'artists/create',
        component: FormArtistComponent
      },
      {
        path: 'artists/edit/:id',
        component: ArtistEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
