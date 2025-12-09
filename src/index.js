const express = require('express');
const blockchainRoutes = require('./routes/blockchainRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/api', blockchainRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Blockchain Explorer running on port ${PORT}`);
});
