import { Product } from './Product';
import { IProductRepository } from './interfaces/IProductRepository';

export default class ProductRepository implements IProductRepository {
	create(product: Product): string {
		console.info("ProductRepository - CREATE");
		return 'INSERT tbl_product';
	};
}