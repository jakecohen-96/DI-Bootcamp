const knex = require('knex');
require("dotenv").config();

const {PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, PGSTRINGURI} = process.env

const db = require('knex')({
    client: 'pg',
    connection: {
        connectionString: PGSTRINGURI,
    //   host: PGHOST,
    //   port: PGPORT,
    //   user: PGUSER,
    //   password: PGPASSWORD,
    //   database: PGDATABASE,
        ssl: { rejectUnauthorized: false } // This enforces SSL with a less strict certificate validation
    },
  });


async function getVersion() {
    const result = await db.raw("SELECT * from products");
    console.log(result.rows);
  }
  
  getVersion();