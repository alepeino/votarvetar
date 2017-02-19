const Knex = require('knex');
const knexfile = require('../knexfile');
const Model = require('objection').Model;

Model.knex = Knex(knexfile[process.env.NODE_ENV]);
