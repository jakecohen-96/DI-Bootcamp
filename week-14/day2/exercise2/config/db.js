const { Pool } = require('pg');

const pool = new Pool({
  user: 'jake',
  host: 'localhost',
  database: 'books_di',
  password: 'root',
  port: 5432,            
});

module.exports = pool;