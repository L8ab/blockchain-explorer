# Blockchain Explorer

A comprehensive blockchain explorer for Ethereum network with Web3.js integration.

## Features

- Block information retrieval
- Transaction details
- Address balance checking
- Real-time blockchain data
- RESTful API

## Tech Stack

- **Backend**: Node.js, Express.js
- **Blockchain**: Web3.js, Ethereum
- **API**: RESTful endpoints

## Project Structure

\`\`\`
blockchain-explorer/
├── src/
│   ├── services/        # Blockchain service
│   ├── routes/          # API routes
│   ├── utils/           # Formatters
│   └── index.js         # Server
└── package.json
\`\`\`

## Installation

\`\`\`bash
npm install
\`\`\`

## Configuration

\`\`\`
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_KEY
\`\`\`

## API Endpoints

- \`GET /api/block/:blockNumber\` - Get block information
- \`GET /api/transaction/:txHash\` - Get transaction details
- \`GET /api/balance/:address\` - Get address balance

---

**POWERED BY L8AB SYSTEMS**
