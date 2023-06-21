"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ProductController = require("./../controllers/Product.controller.js");
var router = (0, _express.Router)();
router.get('/', _ProductController.methods.getProducts);
router.get('/:id', _ProductController.methods.getProduct);
router.post('/', _ProductController.methods.addProduct);
router["delete"]('/:id', _ProductController.methods.deleteProduct);
router.put('/:id', _ProductController.methods.updateProduct);
var _default = router;
exports["default"] = _default;