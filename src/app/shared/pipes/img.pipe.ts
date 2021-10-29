import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'img'
})
export class ImgPipe implements PipeTransform {

    transform(name: string): string {
        return `./assets/img/${name}`;
    }

}
