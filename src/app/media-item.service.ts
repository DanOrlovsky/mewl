
export class MediaItemService {
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

    get() {
        return this.mediaItems;
    }

    add(mediaItem) {
        this.mediaItems.push(mediaItem);
    }

    delete(mediaItem) {
        let index = this.mediaItems.indexOf(mediaItem);
        if(index>=0) {
            this.mediaItems.splice(index, 1);
        }
    }

    
}