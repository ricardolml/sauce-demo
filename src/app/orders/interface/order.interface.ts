import { Product } from '../../products/interfaces/product.interface';
export interface Order{
    name: string;
    lastName: string;
    address: string;
    products: Product[];
}
