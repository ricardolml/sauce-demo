import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { filterTypes } from '../types/filterTypes';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(products: Product[], filter: string): Product[] {
        switch (filter) {
            case
                filterTypes.nameAtoZ:
                return products = products.sort((a, b) => a.name.localeCompare(b.name) );
            case
                filterTypes.nameZtoA:
                return products = products.sort((a, b) =>  b.name.localeCompare(a.name) );
            case
                filterTypes.priceLowHigh:
                return products = products.sort((a, b) => (a.price > b.price) ? 1 : -1);
            case
                filterTypes.priceHighLow:
                return products = products.sort((a, b) => (a.price < b.price) ? 1 : -1);
            default:
                return products;
        }
    }

}
