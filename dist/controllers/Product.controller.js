"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.methods = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("./../database/database");
var _mssql = _interopRequireDefault(require("mssql"));
var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query('Select * from dbo.products');
        case 6:
          result = _context.sent;
          res.json({
            data: result.recordset
          });
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getProduct = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input('id', _mssql["default"].Int, id).query("Select * from dbo.products where id = @id");
        case 7:
          result = _context2.sent;
          res.json({
            data: result.recordset[0]
          });
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          res.status(500);
          res.send(_context2.t0.message);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 11]]);
  }));
  return function getProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var addProduct = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, name, description, price, imagen, stock, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, description = _req$body.description, price = _req$body.price, imagen = _req$body.imagen;
          stock = req.body.stock;
          if (!(name == null || description == null || price == null || imagen == null || stock == null)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.status(400).json({
            msg: 'Please. Send all fields'
          }));
        case 4:
          if (stock == null) stock = 0;
          _context3.prev = 5;
          _context3.next = 8;
          return (0, _database.getConnection)();
        case 8:
          pool = _context3.sent;
          _context3.next = 11;
          return pool.request().input('name', _mssql["default"].VarChar, name).input('description', _mssql["default"].VarChar, description).input('price', _mssql["default"].Decimal, price).input('stock', _mssql["default"].Int, stock).input('imagen', _mssql["default"].VarChar, imagen).query('insert into dbo.products (name, description, stock, price, imagen) values (@name,@description,@stock,@price,@imagen)');
        case 11:
          result = _context3.sent;
          res.json({
            msg: 'Product added',
            name: name
          });
          _context3.next = 19;
          break;
        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](5);
          res.status(500);
          res.send(_context3.t0.message);
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[5, 15]]);
  }));
  return function addProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _req$body2, name, description, price, imagen, stock, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, price = _req$body2.price, imagen = _req$body2.imagen;
          stock = req.body.stock;
          if (!(name == null || description == null || price == null || imagen == null || stock == null)) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'Please. Send all fields'
          }));
        case 5:
          if (stock == null) stock = 0;
          _context4.prev = 6;
          _context4.next = 9;
          return (0, _database.getConnection)();
        case 9:
          pool = _context4.sent;
          _context4.next = 12;
          return pool.request().input('id', _mssql["default"].Int, id).input('name', _mssql["default"].VarChar, name).input('description', _mssql["default"].VarChar, description).input('price', _mssql["default"].Decimal, price).input('stock', _mssql["default"].Int, stock).input('imagen', _mssql["default"].VarChar, imagen).query('update dbo.products set name = @name, description = @description, stock = @stock, price = @price, imagen = @imagen where id = @id');
        case 12:
          result = _context4.sent;
          res.json({
            msg: 'Product update',
            name: name
          });
          _context4.next = 20;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](6);
          res.status(500);
          res.send(_context4.t0.message);
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[6, 16]]);
  }));
  return function updateProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input('id', _mssql["default"].Int, id).query("delete from dbo.products where id = @id");
        case 7:
          result = _context5.sent;
          res.json({
            msg: 'Product deleted'
          });
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          res.status(500);
          res.send(_context5.t0.message);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function deleteProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var methods = {
  getProducts: getProducts,
  getProduct: getProduct,
  addProduct: addProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct
};
exports.methods = methods;