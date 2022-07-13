import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      /*
        notice no env vars here? it will just use account 0 of the hardhat node to deploy
        (you can put in a mnemonic here to set the deployer locally)
      */
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/a4905e3b34cc498aa5a839bbcf49b8f2`,
      accounts: [`0x870ccdf16559ba5e7a946a443e78c9a516501466ed6b4f612a2910e78428e9d4`],
    },
  }
};

export default config;
