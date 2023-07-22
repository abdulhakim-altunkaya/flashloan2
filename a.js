const ethers = require("ethers");
const {addressFactory, addressRouter, addressFrom, addressTo} = require("./utils/AddressList");
const { erc20ABI, factoryABI, routerABI } = require("./utils/ABIList");

// Standard provider
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");

const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

console.log(contractRouter);