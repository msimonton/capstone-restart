
var dotenv = require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'snowgo'
    }
  },

  production: {
    client: 'pg',
    connection: {
      database:process.env.DATABASE_URL,
    },
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
