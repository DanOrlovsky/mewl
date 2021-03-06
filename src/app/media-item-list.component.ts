import { Component, OnInit } from '@angular/core';
import { MediaItemComponent } from './media-item.component';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {

  mediaItems;


  constructor(private mediaItemService: MediaItemService) { }

  ngOnInit() {
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(mediaItem) : void {
    this.mediaItemService.delete(mediaItem);
  }


}
