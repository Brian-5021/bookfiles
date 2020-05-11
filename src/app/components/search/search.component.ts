import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  libros: any[] = [];

  loading: boolean;

  mensaje: string;

  constructor(private http: SpotifyService) { }

  ngOnInit(): void {
  }

  busquedaLibro(termino: string) {

    if (termino === '' ){
    this. mensaje = 'POR FAVOR BUSCA UN LIBRO PARA RECIBIR RESULTADOS';

    }
    else{
    this.loading = true;
    this.http.searchBooks(termino).subscribe((data: any) => {

      this.libros = data.items;
      this.loading = false;
    });
  }

}

}
