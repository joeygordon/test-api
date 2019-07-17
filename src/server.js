const express = require('express');
const peopleRoutes = require('./views/v1/people');
const statusRoutes = require('./views/status');

const PORT = 1234;

const app = express();

app.listen(process.env.PORT || PORT, () => console.log(`Server listening on port ${process.env.PORT || PORT}!`));

app.use(express.json());

app.use('/', statusRoutes);
app.use('/v1/', peopleRoutes);
