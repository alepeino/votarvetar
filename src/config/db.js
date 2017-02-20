import Knex from 'knex';
import knexfile from '../knexfile';
import {Model} from 'objection';

const config = Knex(knexfile[process.env.NODE_ENV]);

Model.knex(config);
