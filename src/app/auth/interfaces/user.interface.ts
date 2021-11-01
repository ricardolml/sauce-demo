import { Product } from '../../products/interfaces/product.interface';
import { Order } from '../../orders/interface/order.interface';
export interface User {
    id: string;
    user: string;
    password?: string;
    name: string;
    car: Product[];
    orders: Order[];
}
