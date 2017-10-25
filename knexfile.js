'use strict'
const dotenv = require('dotenv').config()

module.exports = {

  development: {
    client: 'postgres',
    connection: process.env.DATABASE_URL
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },

    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
