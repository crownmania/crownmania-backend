const Moralis = require('moralis').default;

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
});

module.exports = Moralis;