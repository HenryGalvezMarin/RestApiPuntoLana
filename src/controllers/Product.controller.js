import {getConnection} from "./../database/database";
import sql from "mssql";

const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('Select * from dbo.products');        
        res.json({data : result.recordset});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .query("Select * from dbo.products where id = @id");
        res.json({data: result.recordset[0]});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addProduct = async (req, res) => {
    const { name, description, price, imagen } = req.body;
    let { stock } = req.body;
    if (name == null || description == null || price == null || imagen == null || stock == null) {
        return res.status(400).json({ msg: 'Please. Send all fields' });
    }
    if (stock ==null) stock = 0;
    try {
        const pool = await getConnection();
        const result =await pool
        .request()
        .input('name', sql.VarChar, name)
        .input('description', sql.VarChar, description)
        .input('price', sql.Decimal, price)
        .input('stock', sql.Int, stock)
        .input('imagen', sql.VarChar, imagen)
        .query('insert into dbo.products (name, description, stock, price, imagen) values (@name,@description,@stock,@price,@imagen)');
        res.json({ msg: 'Product added', name: name});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, imagen } = req.body;
    let { stock } = req.body;
    if (name == null || description == null || price == null || imagen == null || stock == null) {
        return res.status(400).json({ msg: 'Please. Send all fields' });
    }
    if (stock ==null) stock = 0;
    try {
        const pool = await getConnection();
        const result =await pool
        .request()
        .input('id', sql.Int, id)
        .input('name', sql.VarChar, name)
        .input('description', sql.VarChar, description)
        .input('price', sql.Decimal, price)
        .input('stock', sql.Int, stock)
        .input('imagen', sql.VarChar, imagen)
        .query('update dbo.products set name = @name, description = @description, stock = @stock, price = @price, imagen = @imagen where id = @id');
        res.json({ msg: 'Product update', name: name});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .query("delete from dbo.products where id = @id");        
        res.json({ msg: 'Product deleted' });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}