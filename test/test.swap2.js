const { ethers } = require("hardhat");
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

  provider = new ethers.providers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/4X4MaNu5qcNpwsNw-ryjGgRmrCuH0tpL");

  contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);
  contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
  contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);

    const amountInHuman = "1";
    amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();

    //getting wallet signer. To get signer, we can use testnet and metamask account
    //but this time we will fork ethereum mainnet to hardhat by typing "npx hardhat node --fork ....httpsendpoing...."
    //Then we will use the first account provided by hardhat

    const getAmountOut = async () => {
      decimals = await contractToken.decimals();
      const amountsOut = await contractRouter.getAmountsOut(amountIn, [
          addressFrom,
          addressTo,
      ]);
      return amountsOut[1].toString();
    }

    

    it("get the owner signer", async () => {
      //getting wallet signer. To get signer, we can use testnet and metamask account
      //but this time we will fork ethereum mainnet to hardhat by typing "npx hardhat node --fork ....httpsendpoing...."
      //Then we will use the first account provided by hardhat
      const [ownerSigner] = await ethers.getSigners();
    });
    
    it("make a tx", async () => {
      const [ownerSigner] = await ethers.getSigners();
      const mainnetForkUniswapRouter = new ethers.Contract(addressRouter, routerABI, ownerSigner);
      //the address you want to manage tx can be different from ownerSigner
      const myAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
      amountOut = await getAmountOut(); 

      const txSwap = await mainnetForkUniswapRouter.swapExactTokensForTokens(
        //amountin
        amountIn,
        //amountout min
        amountOut,
        //path
        [addressFrom, addressTo],
        //address to
        myAddress,
        //deadline
        Date.now() +1000*60*5,
        // gas
        {
          gasLimit:200000,
          gasPrice: ethers.utils.parseUnits("5.5", "gwei"),
        }
      )
      console.log(txSwap);
    });
})
