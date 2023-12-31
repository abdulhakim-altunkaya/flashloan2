# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
const { expect, assert } = require("chai");
const ethers = require("hardhat");

const {addressFactory, addressRouter, addressFrom, addressTo} = require("../utils/AddressList");

const { erc20ABI, factoryABI, routerABI } = require("../utils/ABIList");

let provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth");

describe("read and write to the blockchain", () => {
    
    let contractFactory;
    let contractToken;
    let contractRouter;
    let decimals;
    let amountIn;
    let amountOut;

    
    contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);
    contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
    contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);

    console.log(contractFactory);
})