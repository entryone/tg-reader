const path = require('path');
const MTProto = require('@mtproto/core');

const api_id = '19841528';
const api_hash = '266be745bc0ed86ff5b5226488cff50a';

// 1. Create instance
const mtproto = new MTProto({
  api_id,
  api_hash,

  storageOptions: {
    path: path.resolve(__dirname, './data/1.json'),
  },
});

// 2. Print the user country code
mtproto.call('help.getNearestDc').then(result => {
  console.log('country:', result.country);
});
