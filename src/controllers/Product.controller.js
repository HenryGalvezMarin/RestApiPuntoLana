import {getConnection} from "./../database/database";

const getProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM products');
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM products WHERE idprod = ?', [id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addProduct = async (req, res) => {
    try {
        const { name, descp, price, stock , img } = req.body;     
        if(!name || !descp || !price || !stock || !img)
            return res.status(400).json({msg: 'Please. Send all fields'}
        );
        const product = { name, descp, price, stock , img};
        const connection = await getConnection();        
        const result = await connection.query('INSERT INTO products set ?', product);
        res.json({ msg: 'Product added', id: result.insertId});

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, descp, price, stock , img } = req.body;     
        if(!id || !name || !descp || !price || !stock || !img)
            return res.status(400).json({msg: 'Please. Send all fields'}
        );
        const product = { name, descp, price, stock , img};
        const connection = await getConnection();        
        const result = await connection.query('UPDATE products set ? WHERE idprod = ?', [product, id]);
        res.json({ msg: 'Product updated', id: result.insertId});

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}


const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query('DELETE FROM products WHERE idprod = ?', [id]);
        res.json(result);
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