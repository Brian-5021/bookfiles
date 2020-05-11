import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://www.googleapis.com/books/v1/${query}`;

    return this.http.get(url);
  }

  getBooks() {
    // tslint:disable-next-line: max-line-length
    return this.getQuery('users/115887549021970549084/bookshelves/1001/volumes?key=AIzaSyAzZgIroYJzAjdf4UmLJR9Kk7-FjuD2T0o').pipe(map(data => {
        // tslint:disable-next-line: no-string-literal
        return data['items'];
    }));
  }

  getBook(id: any) {
    return this.getQuery(`volumes/${id}?key=AIzaSyAzZgIroYJzAjdf4UmLJR9Kk7-FjuD2T0o`);
  }

  searchBooks(termino: string) {

    if (termino === '') {
      console.log('no se ha mandado ningún parametro');
    }else {
    return this.getQuery(`volumes?q=${termino}&maxResults=20&key=AIzaSyAzZgIroYJzAjdf4UmLJR9Kk7-FjuD2T0o`);
    }
  }
}
