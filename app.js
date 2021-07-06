const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile('./404.html', { root: __dirname });
});

app.listen(8080);
