const formatAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

const formatWeiToEther = (wei) => {
  return (parseFloat(wei) / 1e18).toFixed(4);
};

const formatTimestamp = (timestamp) => {
  return new Date(timestamp * 1000).toISOString();
};

module.exports = {
  formatAddress,
  formatWeiToEther,
  formatTimestamp
};
