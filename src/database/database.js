import sql from "mssql"
import config from "./../config";

const dbSettings = {
    user: config.user,
    password: config.password,
    server: config.host,
    database: config.database,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool
    } catch (error) {
        console.log(error)
    }
}
// import mysql from "promise-mysql";
// import config from "./../config";

// const connection = mysql.createConnection({
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password,
// });

// const getConnection =() => {
//     return connection;
// }

// module.exports = {
//     getConnection
// }