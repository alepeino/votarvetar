import next from 'next';
import express from 'express';
import config from './config';
import routes from './routes';

const dev = process.env.NODE_ENV !== 'production';
const server = express();
const app = next({ dev });
const handle = app.getRequestHandler();

export default app.prepare()
  .then(() => config.reduce((srv, fn) => fn(srv), server)
    .use('/', routes)
    .use((req, res) => handle(req, res)))
  .then(() => server.listen(process.env.PORT))
  .catch((err) => { throw err; });
