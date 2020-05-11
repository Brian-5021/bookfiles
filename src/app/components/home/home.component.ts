import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any[] = [];

  loading: boolean;

  // tslint:disable-next-line: variable-name
  constructor(private _service: SpotifyService) {
    this.loading = true;
    this._service.getBooks().subscribe((data: any) => {
      // console.log(data);

      this.books = data;
      this.loading = false;
    });
   }

  ngOnInit(): void {
  }

}
