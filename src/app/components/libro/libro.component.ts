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

  constructor(private route: ActivatedRoute, private service: SpotifyService) {
    this.route.params.subscribe(params => {
      this.getBook(params['id']);
    });
   }

   getBook(id: any) {
     this.service.getBook(id).subscribe(book => {
     this.book = book;
     console.log(book);
     });
   }

  ngOnInit(): void {
  }

}
