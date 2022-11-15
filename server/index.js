const express = require("express");
const router = require('./routes.js');
const path = require("path");
const app = express();
app.use(express.json());
require('dotenv').config();

const PORT = process.env.SERVER_PORT;
const AWSDNSapi = process.env.AWS_DNS_API;

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`server listening at ${AWSDNSapi}:${PORT}`);
});
