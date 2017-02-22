import Knex from 'knex';
import knexfile from '../knexfile';

before(function () {
	process.env.NODE_ENV = 'test';
	process.env.PORT = 3100;
});

beforeEach(function () {
  const knex = Knex(knexfile[process.env.NODE_ENV]);
  knex.migrate.latest();
});