import express, { Router } from 'express';
// import { productRouter } from "./modules/products";

const app = express();
console.log("APP: ", app);

// const routes = Router();
// routes.use('/products', productRouter);

// app.use(express.json());

// app.use(routes);

// app.listen(3333, () =>
// 	console.info(
// 		`server listening on localhost:3333`,
// 		new Date(),
// ));

app.listen(3333, () => 'Server listen on 3333');

