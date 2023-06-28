import {getConnection} from "./../database/database";
import sql from "mssql";

const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('Select * from dbo.usuarios');        
        res.json({data : result.recordset});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .query("Select * from dbo.usuarios where id = @id");
        res.json({data: result.recordset[0]});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addUsuario = async (req, res) => {
    const { name, email, password } = req.body;
    if (name == null || email == null || password == null) {
        return res.status(400).json({ msg: 'Please. Send all fields' });
    }
    try {
        const pool = await getConnection();
        const result =await pool
        .request()
        .input('name', sql.VarChar, name)
        .input('email', sql.VarChar, email)
        .input('password', sql.VarChar, password)
        .query("insert into dbo.usuarios (name, email, password) values (@name, @email, @password)");
        res.json({data: result.recordset[0]});
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const loginUsuario = async (req, res) => {
    const { email, password } = req.body;
    if (email == null || password == null) {
        return res.status(400).json({ msg: 'Please. Send all fields' });
    }
    try {
        const pool = await getConnection();
        const result =await pool
        .request()
        .input('email', sql.VarChar, email)
        .input('password', sql.VarChar, password)
        .query("Select * from dbo.usuarios where email = @email");
        if(result.recordset.length == 0) {
            res.status(500);
            res.send("Usuario no encontrado");
        } else if (result.recordset[0].password == password) {
            res.json({data: result.recordset[0]});
        } else {
            res.status(500);
            res.send("Contraseña incorrecta");
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methods = {
    getUsuarios,
    getUsuario,
    addUsuario,
    loginUsuario
}