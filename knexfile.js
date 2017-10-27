
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
      database:'postgres://zcvjvhfjpvtpta:a78919810ec9c0868a61a05aa10f87e9af9f04e29878fd2f611a6ed00c568b4d@ec2-184-73-159-137.compute-1.amazonaws.com:5432/d3
      04cb3ptr1poj'
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
