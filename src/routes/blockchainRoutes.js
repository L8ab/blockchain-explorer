const express = require('express');
const router = express.Router();
const blockchainService = require('../services/blockchainService');

router.get('/block/:blockNumber', async (req, res) => {
  try {
    const block = await blockchainService.getBlock(req.params.blockNumber);
    res.json({ success: true, data: block });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/transaction/:txHash', async (req, res) => {
  try {
    const tx = await blockchainService.getTransaction(req.params.txHash);
    res.json({ success: true, data: tx });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/balance/:address', async (req, res) => {
  try {
    const balance = await blockchainService.getBalance(req.params.address);
    res.json({ success: true, data: balance });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
