import { Model } from 'objection';
import Knex from 'knex';
import knexfile from '../../../knexfile';

export default (server) => {
  const config = Knex(knexfile[process.env.NODE_ENV]);
  Model.knex(config);
  return server;
};
