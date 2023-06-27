import { Router } from "express";
import {methods as productController} from "./../controllers/Product.controller.js";

const router = Router();

router.get('/',  productController.getProducts);
router.get('/lista',  productController.getProductsNamePrice);
router.get('/:id',  productController.getProduct);
router.post('/', productController.addProduct);
router.delete('/:id', productController.deleteProduct);
router.put('/:id', productController.updateProduct);

export default router;