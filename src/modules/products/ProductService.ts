import ProductRepository from './ProductRepository';
import { Product } from './Product';
import { IProductService } from './interfaces/IProductService';

export default class ProductService implements IProductService {
	constructor(private readonly productRepository: ProductRepository) { }

	create(product: Product): string {
		console.info("ProductService - CREATE");
		this.productRepository.create(product);
		return `Produto criado: ${product}`;
	};
};
