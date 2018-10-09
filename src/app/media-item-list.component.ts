import { Component, OnInit } from '@angular/core';
import { MediaItemComponent } from './media-item.component';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {

  onMediaItemDelete(mediaItem) : void {
    
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "Harry Potter and the Sorcerer's Stone",
      medium: "Movies",
      category: "Science Fiction",
      year: 2005,
      watchedOn: 1294166565384,
      isFavorite: true
    },
    {
      id: 3,
      name: "Don't be a Menace to South Central While Drinking Your Juice in the Hood",
      medium: "Movies",
      category: "Comedy",
      year: 1996,
      watchedOn: 1294166565384,
      isFavorite: false
    },
  ]

}
