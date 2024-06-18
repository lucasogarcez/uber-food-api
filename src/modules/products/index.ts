import express, { Router } from "express";
import ProductController from "./ProductController";
import ProductRepository from "./ProductRepository";
import ProductService from "./ProductService";

const productRouter: express.Router = Router();

const productRepository: ProductRepository = new ProductRepository();
const productService: ProductService = new ProductService(productRepository);
const productController: ProductController = new ProductController(productService);

// productRouter.get("", productController.getProducts);

export { productRouter };