const Web3 = require('web3');

class BlockchainService {
  constructor() {
    this.web3 = new Web3(process.env.ETHEREUM_RPC_URL || 'https://mainnet.infura.io/v3/YOUR_KEY');
  }
  
  async getBlock(blockNumber) {
    try {
      const block = await this.web3.eth.getBlock(blockNumber, true);
      return {
        number: block.number,
        hash: block.hash,
        timestamp: block.timestamp,
        transactions: block.transactions.length,
        gasUsed: block.gasUsed,
        gasLimit: block.gasLimit
      };
    } catch (error) {
      throw new Error(`Failed to fetch block: ${error.message}`);
    }
  }
  
  async getTransaction(txHash) {
    try {
      const tx = await this.web3.eth.getTransaction(txHash);
      const receipt = await this.web3.eth.getTransactionReceipt(txHash);
      
      return {
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: this.web3.utils.fromWei(tx.value, 'ether'),
        gas: tx.gas,
        gasPrice: tx.gasPrice,
        status: receipt.status ? 'success' : 'failed',
        blockNumber: tx.blockNumber
      };
    } catch (error) {
      throw new Error(`Failed to fetch transaction: ${error.message}`);
    }
  }
  
  async getBalance(address) {
    try {
      const balance = await this.web3.eth.getBalance(address);
      return {
        address,
        balance: this.web3.utils.fromWei(balance, 'ether'),
        balanceWei: balance
      };
    } catch (error) {
      throw new Error(`Failed to fetch balance: ${error.message}`);
    }
  }
}

module.exports = new BlockchainService();
