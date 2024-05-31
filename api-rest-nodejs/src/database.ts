import 'dotenv/config';
import { knex as setupKnex, Knex } from 'knex';
import { env } from './env';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env not found.');
}

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: { extension: 'ts', directory: './database/migrations' },
  useNullAsDefault: true,
};

export const knex = setupKnex(config);
