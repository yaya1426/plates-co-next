import { Product } from "./product";

export interface BasketProduct extends Product {
  quantity: number;
}
