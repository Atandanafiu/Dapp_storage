const ether = require("ether");
const fs  = require("fs extra");
require("dotenv").cofig();

async function main (){
    const provider = new ether.provider.JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ether.wallet(process.env.PRIVATE_KEY, provider);
    const abi = fs.abi("./Dapp_Storage_sol_Simple.abi", "utf8");
    const bin = fs.bin("./Dapp_Storage_sol_Simple.bin", "utf8");
    const contractFactory = new ether.ContractFactory(abi, bin, wallet);
    console.log("Deploying .......");
    const contract = await contractFactory.deploy();
    console.log(contract);
}

main()
.then (() => process.exit(0))
.catch((error ) => {
    console.error(error);
    process.exit(1);
});