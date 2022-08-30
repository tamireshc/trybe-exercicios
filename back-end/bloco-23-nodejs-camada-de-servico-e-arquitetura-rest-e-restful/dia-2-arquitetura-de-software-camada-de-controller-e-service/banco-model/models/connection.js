const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
    port: 33061,
	user: 'root',
	password: 'root',
	database: 'model_example' });

module.exports = connection;