import Web3 from "web3";
var options = {
    reconnect: {
        auto: true, // Auto Reconnect Websocket
        delay: 5000, // ms
        maxAttempts: 5, // Retry
        onTimeout: false // Timeout ?
    }
};
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://ws-mainnet.optimism.io', options));
var LogsOptions = {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607', //Contract ERC20 Token
    topics: [
        '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef' //Topic Transfer
    ]
};
var subscription = web3.eth.subscribe('logs', LogsOptions, function(error, result){
    if (!error) {

    }else console.log(error);
}).on("data", async function(log){
    
    try{
    let from = web3.eth.abi.decodeParameter("address", log.topics[1]);
    let to = web3.eth.abi.decodeParameter("address", log.topics[2]);
    let value:any = web3.eth.abi.decodeParameter("uint256", log.data);
    let amount = value / 10**6;
    console.log(`amount : ${amount} | From ${truncated(from)} To ${truncated(to)} | TxHash ${log.transactionHash}`);
    }catch(err){}
}).on("changed", function(log){
    console.log('changed');
});

function truncated(address:any)
{
    let first = address.substr(0,5);
    let last = address.substr(address.length - 5);
    let str = first+ '...' + last;
    return str;
}