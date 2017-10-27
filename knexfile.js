
var dotenv = require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'snowgo'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database:'postgres://tbefngjvprrfvk:7685d75305632faa589d2aa9d9a90e4cee287b4c81580d3f17af9e07c1b34eeb@ec2-184-73-159-137.compute-1.amazonaws.com:5432/dc62joinnf9ni6?ssl=true'
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
