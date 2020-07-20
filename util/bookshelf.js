// In a file named, e.g. bookshelf.js
const fs = require('fs');
var isDocker = require('./util/is_docker');
console.log('Is Docker: ' + isDocker());
var dbPass = process.env.DB_PASS;

if (isDocker()) {
  dbPass = fs.readFileSync('/run/secrets/db_pass', 'utf8').trim()
}

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : dbPass,
      database : process.env.DB_DATABASE,
      charset  : 'utf8'
    }
  })
module.exports = require('bookshelf')(knex)