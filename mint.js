Moralis.initialize("UHL7l7F5sAV2x6pSwUG9hsjGRNz1xrdFPSHzxyOJ");
Moralis.serverURL = "https://y2opbddnpxpe.usemoralis.com:2053/server";
const contAdd = "0x5C246189107D154a938c6F72123169ea8a7Ff298"; //beta only on testnet

async function mint(){
    Moralis.authenticate({
        signingMessage: "Seals and Eels Mint Authorization Request",
      });
    //Web3 User Account 
    let web3 = await Moralis.Web3.enable();
    let account = await web3.eth.getAccounts();

    //Mint Inputs
    let tokenId = 1;
    let address = account[0];
    let amount = 1;

    //Contract Deploy
    const contract = new web3.eth.Contract(abi, contAdd);
    contract.methods.mint(amount).send({from: address, value: 50000000000000000}); // mint compliance on contract so no need to try to manipulate this people
}
