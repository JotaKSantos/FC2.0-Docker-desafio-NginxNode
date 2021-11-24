const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

var sql = `CREATE TABLE IF NOT EXISTS people (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(255) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;`
connection.query(sql)

var sql = `TRUNCATE people`
connection.query(sql)

var sql = `INSERT INTO people(name) 
    values('Jksantos'),
    ('Weslely'),
    ('Bryan'),
    ('Anthony')`
connection.query(sql)

var nomes = '<h2>Nomes:</h2>';
connection.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        nomes += row.name+'<br />';
    });
});
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle</h1>'+nomes)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})