import env2 from 'env2';
import next from 'next';
import express from 'express';
import Opcion from './models/Opcion';

env2('.env');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT;

app.prepare()
.then(() => {
  require('./config/db');

  const server = express();

  server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  server.get('/api', (req, res, next) => {
    Opcion.query()
      .then((opciones) => res.send(opciones))
      .catch;
  });

  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) console.log(err);
  });
});
