import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArtistsService} from './../../../core/services/artists/artists.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-artist',
  templateUrl: './form-artist.component.html',
  styleUrls: ['./form-artist.component.scss']
})
export class FormArtistComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private artistsService: ArtistsService,
    private router: Router

  ) {
    this.buildForm();
  }

  ngOnInit() {
  }
  saveArtist(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const artist = this.form.value;
      this.artistsService.createArtist(artist)
        .subscribe((newArtist) => {
          console.log(newArtist);
          this.router.navigate(['./admin/artists']);
        });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ''
    });
  }
}
