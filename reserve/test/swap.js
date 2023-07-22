const { expect, assert } = require("chai");
const ethers = require("hardhat");

const {addressFactory, addressRouter, addressFrom, addressTo} = require("../utils/AddressList");

const { erc20ABI, factoryABI, routerABI } = require("../utils/ABIList");

describe("read and write to the blockchain", () => {
    let provider;
    let contractFactory;
    let contractToken;
    let contractRouter;
    let decimals;
    let amountIn;
    let amountOut;

    provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");
    contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);
    contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
    contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);

    console.log(contractFactory);
})