import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

    transform(text: string, numTruncate: number = 100): string {
        return text.substr(0, numTruncate);
    }

}
