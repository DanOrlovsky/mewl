import { Pipe } from '@angular/core'

@Pipe({
    name: 'categoryList'
})

export class CategoryListPipe {
    transform(mediaItems) {
        const categories = [];
        mediaItems.forEach(item => {
            if(categories.indexOf(item.category) < 0) {
                categories.push(item.category)
            }
        })

        return categories.join(', ');
    }
}