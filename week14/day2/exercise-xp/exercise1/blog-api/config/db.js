// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'jake',
//   host: 'localhost',
//   database: 'books_di',
//   password: 'root',
//   port: 5432,            
// });

// module.exports = pool;

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

module.exports = pool;