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

  it("connects to a provider, contractFactory, router, token", () => {
    assert(provider._isProvider);
    expect(contractFactory.address).to.equals("0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");
  });

    //get price informaation
  const getAmountOut = async () => {
    decimals = await contractToken.decimals();
    const amountInHuman = "1";
    amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();
    const amountsOut = await contractRouter.getAmountsOut(amountIn, [
        addressFrom,
        addressTo,
    ]);
    return amountsOut[1].toString();
  }
  it("getss the price of aamountsOut", async () => {
    const amount = await getAmountOut();
    assert(amount.toString())
    console.log(amount);
  })


})
