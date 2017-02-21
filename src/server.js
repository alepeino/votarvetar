import next from 'next';
import express from 'express';
import config from './config';
import Opcion from './models/Opcion';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT;

app.prepare()
.then(() => {
  const server = express();

  config.forEach(fn => fn(app, server));

  server.get('/api', (req, res) => {
    Opcion.query()
      .then(opciones => res.send(opciones))
      .catch((e) => { throw e; });
  });

  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
  });
});
