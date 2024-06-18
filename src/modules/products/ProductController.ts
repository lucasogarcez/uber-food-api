import { Product } from './Product';
import ProductService from './ProductService';
import { Request, Response } from "express";

export default class ProductController {
	constructor(private readonly productService: ProductService) { }

	async getProducts(req: Request, res: Response): Promise<Response> {
		return res.json(this.productService.create(new Product()));
	}
}