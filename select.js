//load db.js module 
const db = require('./lib/db');

//connect DB (node_sample)
const con = db.connect();

//SQL 1
let sql = '';
sql = 'SELECT * FROM users';

//exec SQL
con.query(sql, (err, results) => {
    if (err) throw err;
    results.forEach((user) => {
        console.log(user.id);
        console.log(user.email);
    })
});

//SQL 2
sql = 'SELECT * FROM users WHERE ?';
let params = {}
params = { id: 3 }

con.query(sql, params, (err, results) => {
    if (err) throw err;
    let user = results[0];
    console.log(`${user.first_name} ${user.last_name}`);
});

//SQL 3
sql = 'SELECT * FROM users LIMIT ? OFFSET ?';
const limit = 3;
const offset = 0;
params = [limit, offset]

con.query(sql, params, (err, results) => {
    if (err) throw err;
    results.forEach((user) => {
        console.log(user.email);
    })
});

//DB connection closed
con.end();