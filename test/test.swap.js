const ethers = require("ethers");
const {expect, assert} = require("chai");

const {addressFactory, addressRouter, addressFrom, addressTo} = require("../utils/AddressList");
const { erc20ABI, factoryABI, routerABI } = require("../utils/ABIList");

describe("creaate contraact", () => {
  let provider,
  contractFactory,
  contractRouter,
  contractToken,
  decimals,
  amountIn,
  amountOut;

  provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");

  contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);
  contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
  contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);

  console.log(contractFactory);
})
