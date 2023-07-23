const { ethers } = require("hardhat");
const {expect, assert} = require("chai");

const {addressFactory, addressRouter, addressFrom, addressTo} = require("../utils/AddressList");
const { erc20ABI, factoryABI, routerABI } = require("../utils/ABIList");

describe("creaate contraact", () => {



    //getting wallet signer. To get signer, we can use testnet and metamask account
    //but this time we will fork ethereum mainnet to hardhat by typing "npx hardhat node --fork ....httpsendpoing...."
    //Then we will use the first account provided by hardhat
    const provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/4X4MaNu5qcNpwsNw-ryjGgRmrCuH0tpL");
    it("sends a tx", async () => {
      //getting wallet signer. To get signer, we can use testnet and metamask account
      //but this time we will fork ethereum mainnet to hardhat by typing "npx hardhat node --fork ....httpsendpoing...."
      //Then we will use the first account provided by hardhat
      const [ownerSigner] = await ethers.getSigners();
      console.log(ownerSigner);
    })
})
