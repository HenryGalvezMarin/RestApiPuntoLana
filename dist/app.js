"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _products = _interopRequireDefault(require("./routes/products.routes"));
// Routes

var app = (0, _express["default"])();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use((0, _cors["default"])({
  origin: 'http://localhost:3000'
}));

//Routes
app.use('/api/products', _products["default"]);
var _default = app;
exports["default"] = _default;