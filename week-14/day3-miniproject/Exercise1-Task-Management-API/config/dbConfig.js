const { Pool } = require('pg');

const pool = new Pool({
    user: 'jake',          
    host: 'localhost',
    database: 'taks_db',           
    password: 'root',   
    port: 5432,                     
});

module.exports = pool;

