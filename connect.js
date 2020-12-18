//load modules
const mysql = require('mysql');
//const config = require('config');

//create MySQL connection
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
});

//connect to MySQL
con.connect((err) => {
    if (err) throw err;
    console.log('connect success.');
});

//end connection
con.end();