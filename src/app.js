
const express = require('express');
// const homepage = require('./views/index');
const imageSearchRoutes = require('./routes/imageSearch');

const app = express();

app.use(express.json());

// app.use('/', homepage);
app.use('/api/images', imageSearchRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

module.exports = app;