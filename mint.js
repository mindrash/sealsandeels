Moralis.initialize("UHL7l7F5sAV2x6pSwUG9hsjGRNz1xrdFPSHzxyOJ");
Moralis.serverURL = "https://y2opbddnpxpe.usemoralis.com:2053/server";
const contAdd = "0x47bb4c79e807Ea8c411Bc513915511D03D04bc68";

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
    contract.methods.mint(amount).send({from: address, value: 25000000000000000});
}
