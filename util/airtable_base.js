const Airtable = require('airtable')
var secrets = require('./secrets');
var apiKey = process.env.AIRTABLE_API_KEY;

Airtable.configure({
    apiKey: secrets('AIRTABLE_API_KEY')
})

const base = Airtable.base(secrets('AIRTABLE_BASE_ID'))

module.exports = base;