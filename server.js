const env = require('env2')('.env');
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

	require('./config/db');

  // Rutas Next:
  server.get('*', (req, res) => {
    handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
  });
});
