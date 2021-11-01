import { Product } from '../../products/interfaces/product.interface';
export interface Order{
    name: string;
    lastName: string;
    address: string;
    subtotal: number;
    tax: number;
    total: number;
    date: Date;
    products: Product[];
}
