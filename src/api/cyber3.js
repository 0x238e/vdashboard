//import axios from 'axios';

const axios = require('axios');
const ETx = require('ethereumjs-tx');
/* eslint-disable no-console */

const privateKey = Buffer.from('AD877C4BE2A3A966CCD88C79B2EB0B2AEE6BE490FCCEC2121FC3B528D3044124', 'hex')

const txParams = {
  type: 0,
  nonce: 2,
  //gasPrice: 18000000000, 
  //gasLimit: 90000,
  to: '0xeb16a89386832c869bdad06bcf790aaad3551380',
  value: '0x01', 
  data: '0x',
  chainId: 41
}

const tx = new ETx(txParams)
tx.sign(privateKey)
const serializedTx = tx.serialize()
const rawTx = serializedTx.toString('hex');

async function test() {
  const data = await axios.post('http://3.1.81.79:8501', {
    jsonrpc: '2.0',
    method: 'eth_sendRawTransaction',
    params: [`0x${rawTx}`],
    id: 1,
  });

  console.log(data);
}

test();
