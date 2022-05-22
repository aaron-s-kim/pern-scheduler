// PG database client/connection setup
const Pool = require("pg").Pool;
require("dotenv").config(); // Load .env data into process.env

// Heroku setup
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const proConfig = process.env.DATABASE_URL; // heroku addons

// console.log("devConfig: ", devConfig);
// console.log("proConfig: ", proConfig);
// console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

const pool = (() => {
  if (process.env.NODE_ENV !== 'production') {
    return new Pool({
      connectionString: devConfig,
      ssl: false
    });
  } else {
    return new Pool({
      connectionString: proConfig,
      ssl: {
        rejectUnauthorized: false
      }
    });
  }
})();

module.exports = pool;