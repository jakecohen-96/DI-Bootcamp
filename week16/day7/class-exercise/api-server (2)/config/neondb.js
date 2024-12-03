const knex = require("knex");
require("dotenv").config();

// # Do not expose your Neon credentials to the browser
// console.log(process.env);

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, PGSTRINGURI } =
  process.env;

const db = knex({
  client: "pg",
  connection: {
    connectionString: PGSTRINGURI,
    // host: PGHOST,
    // port: PGPORT,
    // user: PGUSER,
    // password: PGPASSWORD,
    // database: PGDATABASE,
    ssl: { rejectUnauthorized: false },
  },
});

module.exports = { db };
