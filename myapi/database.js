const mysql = require('mysql');
const connection = mysql.createPool({
	host: 'localhost',
	user: 'netuser',
	password: 'netpass',
	database: 'coursedb'
})
module.exports = connection;