const blockchainService = require('../src/services/blockchainService');

describe('Blockchain Service', () => {
  test('getBlock should return block data', async () => {
    const block = await blockchainService.getBlock('latest');
    expect(block).toHaveProperty('number');
    expect(block).toHaveProperty('hash');
  });
  
  test('getBalance should return balance', async () => {
    const address = '0x0000000000000000000000000000000000000000';
    const balance = await blockchainService.getBalance(address);
    expect(balance).toHaveProperty('address');
    expect(balance).toHaveProperty('balance');
  });
});
