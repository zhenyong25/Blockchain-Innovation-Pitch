
 var account = null;
 var signature = null; 
 var message = "Safe Travel NFT #110322"; 


(
    async() => {
        if(window.ethereum){
            await window.ethereum.send('eth_requestAccounts'); 
            window.web3 = new Web3(window.ethereum); 

            var accounts = await web3.eth.getAccounts(); 
            account = accounts[0]; 
        }
    })(); 

    async function signData() {
    // // const signer = provider.getSigner()

    // const message = "Hello from Ethereum Stack Exchange!";
    // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    // const account = accounts[0];
    signature = await web3.eth.personal.sign(message,account); 

}


// signTypedDataV4Button.addEventListener('click', function (event) {
//     event.preventDefault();
  
//     const msgParams = JSON.stringify({
//       domain: {
//         // Defining the chain aka Rinkeby testnet or Ethereum Main Net
//         chainId: 1,
//         // Give a user friendly name to the specific contract you are signing for.
//         name: 'Ether Mail',
//         // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
//         verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
//         // Just let's you know the latest version. Definitely make sure the field name is correct.
//         version: '1',
//       },
  
//       // Defining the message signing data content.
//       message: {
//         /*
//          - Anything you want. Just a JSON Blob that encodes the data you want to send
//          - No required fields
//          - This is DApp Specific
//          - Be as explicit as possible when building out the message schema.
//         */
//         contents: 'Hello, Bob!',
//         attachedMoneyInEth: 4.2,
//         from: {
//           name: 'Cow',
//           wallets: [
//             '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
//             '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
//           ],
//         },
//         to: [
//           {
//             name: 'Bob',
//             wallets: [
//               '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
//               '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
//               '0xB0B0b0b0b0b0B000000000000000000000000000',
//             ],
//           },
//         ],
//       },
//       // Refers to the keys of the *types* object below.
//       primaryType: 'Mail',
//       types: {
//         // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
//         EIP712Domain: [
//           { name: 'name', type: 'string' },
//           { name: 'version', type: 'string' },
//           { name: 'chainId', type: 'uint256' },
//           { name: 'verifyingContract', type: 'address' },
//         ],
//         // Not an EIP712Domain definition
//         Group: [
//           { name: 'name', type: 'string' },
//           { name: 'members', type: 'Person[]' },
//         ],
//         // Refer to PrimaryType
//         Mail: [
//           { name: 'from', type: 'Person' },
//           { name: 'to', type: 'Person[]' },
//           { name: 'contents', type: 'string' },
//         ],
//         // Not an EIP712Domain definition
//         Person: [
//           { name: 'name', type: 'string' },
//           { name: 'wallets', type: 'address[]' },
//         ],
//       },
//     });
  
//     var from = web3.eth.accounts[0];
  
//     var params = [from, msgParams];
//     var method = 'eth_signTypedData_v4';
  
//     web3.currentProvider.sendAsync(
//       {
//         method,
//         params,
//         from,
//       },
//       function (err, result) {
//         if (err) return console.dir(err);
//         if (result.error) {
//           alert(result.error.message);
//         }
//         if (result.error) return console.error('ERROR', result);
//         console.log('TYPED SIGNED:' + JSON.stringify(result.result));
  
//         const recovered = sigUtil.recoverTypedSignature_v4({
//           data: JSON.parse(msgParams),
//           sig: result.result,
//         });
  
//         if (
//           ethUtil.toChecksumAddress(recovered) === ethUtil.toChecksumAddress(from)
//         ) {
//           alert('Successfully recovered signer as ' + from);
//         } else {
//           alert(
//             'Failed to verify signer when comparing ' + result + ' to ' + from
//           );
//         }
//       }
//     );
//   });
