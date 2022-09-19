
async function purchase() {

    let params = [{
        "from": "0x19f4147398d2B4Bb048467aAAa7E604424A6Ff34",
        "to": "0x5D2bd2B8477f5A0492DF83e569753C5abC314b23",
        "gas": Number(21000).toString(16),
        "gasPrice": Number(25000).toString(16),
        "value": Number(100000000000000000).toString(16),
    }]

     let result = await window.ethereum.request({method: "eth_sendTransaction", params}).catch((err)=>{
        console.log(err)
     })
}

// const sendERC20Transaction = async (receiver, amount) => {
//     var Tx     = require('ethereumjs-tx')
//     const Web3 = require('web3')
//     const web3 = new Web3('https://mainnet.infura.io/v3/your-project-id')
//     web3.eth.accounts.wallet.add('privateKey of fromwallet');
//     var contractAbi =[];
//     var tokenAddress = '0x55d398326f99059ff775485246999027b3197955' 
//     var fromAddress = '0x19f4147398d2B4Bb048467aAAa7E604424A6Ff34'
//     var tokenInst = new web3.eth.Contract(contractAbi,tokenAddress);
//     tokenInst.methods.transfer(receiver, amounts).send({from: fromAddress, gas: 100000},function (error, result){ //get callback from function which is your transaction key
//         if(!error){
//             console.log(result);
//             handleSuccessTrue();
//         } else{
//             console.log(error);
//             web3.eth.getBalance(fromAddress, (err,bal) => { alert('Your account has ' + web3.utils.fromWei(bal, 'ether') + ', Insufficient funds for gas * price + value on your wallet')});
//             handleSuccessFalse();
//         }
//     });

// //Finally, you can check if usdt tranaction success through this code.
// tokenInst.methods.balanceOf(receiver).call().then(console.log)
// .catch(console.error)