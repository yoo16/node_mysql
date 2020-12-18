//load db.js module 
const db = require('./lib/db');

//connect DB (node_sample)
const con = db.connect();

const first_name = 'yohei';
const last_name = 'yoshikawa';
const id = 1;
let params = [first_name, last_name, id];

const sql = 'UPDATE users SET first_name = ?, last_name = ? WHERE id = ?';
con.query(sql, params, (err, results) => {
    if (err) throw err;
    console.log(results);
    console.log('update success!!');
})

con.end();