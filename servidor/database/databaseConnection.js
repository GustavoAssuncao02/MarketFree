const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'marketfree',
});

connection.connect((error) => {
  if (error) {
    console.error('Erro na conexão: ', error);
  } else {
    console.log('Servidor Conectado');
  }
});

module.exports = connection;