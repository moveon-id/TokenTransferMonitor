# TokenTransferMonitor
ERC20 TokenTransfer Activity Monitor

# Install 
`npm install` \
Or if you using yarn \
`yarn install`

# Change RPC 
```JS
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ws-mainnet.optimism.io', options));
```
change with your rpc target EVM \
RPC must Websocket

# Change ERC20 Contract Address

```JS
var LogsOptions = {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', //Contract ERC20 Token
    topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' //Topic Transfer
    ]
};
```
So This (0x7F5c764cBc14f9669B88837ca1490cCa17c31607) is USDC Contract On Optimism Change It
