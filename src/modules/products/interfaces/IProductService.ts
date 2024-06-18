import { Product } from "../Product";

export interface IProductService {
	create(product: Product): string;
}