import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  libros: any[] = [];

  constructor(private http: SpotifyService) { }

  ngOnInit(): void {
  }

  busquedaLibro(termino: string) {
    console.log(termino);

    this.http.searchBooks(termino).subscribe((data: any) => {
      console.log(data.items);
      this.libros = data.items;
    });
  }

}
