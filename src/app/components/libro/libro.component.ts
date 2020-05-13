import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  book: any;
  loading: boolean;

  constructor(private route: ActivatedRoute, private service: SpotifyService) {
    this.loading = true;
    this.route.params.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      this.getBook(params['id']);
    });
   }

   getBook(id: any) {
     this.loading = true;
     this.service.getBook(id).subscribe(book => {
     this.book = book;
     this.loading = false;
     console.log(book);
     });
   }

  ngOnInit(): void {
  }

}
