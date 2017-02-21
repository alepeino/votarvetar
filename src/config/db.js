import { Model } from 'objection';
import Knex from 'knex';
import knexfile from '../../knexfile';

export default async () => {
  const config = Knex(knexfile[process.env.NODE_ENV]);
  Model.knex(config);
};
