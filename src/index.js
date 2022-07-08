require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const pokemonProxy = createProxyMiddleware({
  target: "https://pokeapi.co",
  changeOrigin: true,
  pathRewrite: {
    "^/pokemon": "/api/v2/pokemon"
  },
  loglevel: "debug"
});

const secretProxy = createProxyMiddleware({
  target: "http://secret-api-svc/api/v1/",
  changeOrigin: true,
  pathRewrite: {
    "^/secret": "/secret"
  },
  loglevel: "debug"
});

const app = express();
const port = process.env.PORT || 3000;

app.use('/pokemon', pokemonProxy);
app.use('/secret', secretProxy);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
