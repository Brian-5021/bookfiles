import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { RouterModule, Router  } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  libros: any[] = [];

  loading: boolean;

  mensaje: string;

  constructor(private http: SpotifyService, private router: Router) { }

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

VerLibro(item: any) {
  console.log(item);
  this.router.navigate(['/libro', item]);
}

}
