require('dotenv').config();
const express = require('express'),
      ctrl = require('./controller'),
      port = process.env.SERVER_PORT,
      app = express();

app.use(express.json());

app.listen(port, console.log(`Server running on ${port}`));