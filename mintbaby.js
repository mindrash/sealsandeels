const serverUrl = "https://y2opbddnpxpe.usemoralis.com:2053/server";
const appId = "UHL7l7F5sAV2x6pSwUG9hsjGRNz1xrdFPSHzxyOJ";
const contAdd = "0x47bb4c79e807Ea8c411Bc513915511D03D04bc68";

Moralis.start({ serverUrl, appId });

async function mint() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Seals and Eels Mint Authorization Request",
      })
        .then(function (user) {
          address = user.get("ethAddress");
          cost = 50000000000000000;
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));

          const contract = new web3.eth.Contract(abi, contAdd);
          contract.methods.mint(amount).send({from: address, value: cost});
          mintStatus.style.display = "block";     
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }