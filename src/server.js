// Server Start
// src/server.js

require('dotenv').config();
const app = require('./app');
const connectBD = require('./config/db');
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectBD();
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
};
startServer();
