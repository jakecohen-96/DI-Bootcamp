const { Pool } = require('pg');

const pool = new Pool({
    user: 'jake',          
    host: 'localhost',
    database: 'tasks_db',           
    password: 'your_db_password',   
    port: 5432,                     
});
