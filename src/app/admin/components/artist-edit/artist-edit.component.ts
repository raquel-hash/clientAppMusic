import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArtistsService} from '../../../core/services/artists/artists.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.scss']
})
export class ArtistEditComponent implements OnInit {

  form: FormGroup;
  id: number;
  constructor(
    private formBuilder: FormBuilder,
    private artistsService: ArtistsService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) {
    this.buildForm();
  }

  ngOnInit() {
this.activatedRoute.params.subscribe((params: Params) => {
   this.id = params.id;
   this.artistsService.getArtist(this.id)
    .subscribe(artist => {
      this.form.patchValue(artist);
    });
});
  }
  saveArtist(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const artist = this.form.value;
      this.artistsService.updateArtist(this.id, artist)
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
