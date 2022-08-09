Moralis.initialize("UHL7l7F5sAV2x6pSwUG9hsjGRNz1xrdFPSHzxyOJ");
Moralis.serverURL = "https://y2opbddnpxpe.usemoralis.com:2053/server";
const contAdd = "0xEBA9F7B492EbE5b38897d61880aA075be7179E2E";

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
    contract.methods.mint(amount).send({from: address, value: 50000000000000000});
}
