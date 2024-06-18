import { Product } from "../Product";

export interface IProductRepository {
	create(product: Product): string;
}