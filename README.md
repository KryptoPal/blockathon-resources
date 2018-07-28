# blockathon-resources

Resources for the July Arizona Blockathon

## Using this repo

#### Prereqs

1. Make sure you are using a unix flavor operating system for everything
2. Install some stuff:
   * [yarn](https://yarnpkg.com/en/)
   * [node 9.1.0](https://nodejs.org/en/) (or better yet, install
     [nvm](https://github.com/creationix/nvm))
   * [MetaMask](https://metamask.io)
     
### Quick Start

`yarn install`

#### Connect to a Kryptopal Testnet Node

`yarn run connect:provider`

#### Interact with a predeployed token contract

Inside the truffle console from the previous step copy and paste the following:

```
let kpx; RootRegistryV0_1_0.at('0x2095c9c828586791e9bb0836255d6fdd8f87fae4').then(_root => _root.getLatestProxyAddr("ContractRegistry")).then(_proxy => ContractRegistryV0_1_0.at(_proxy)).then(_registry => _registry.getLatestProxyAddr("KryptoX777")).then(_kpxProxy => KryptoX777V0_1_0.at(_kpxProxy)).then(_kpx => kpx=_kpx)
```

Then you can interct with it like such:

```
kpx.balanceOf('0x80ce9596ed870b0a03e57d3b311e5c67c29e1d26').then(_bal => web3.fromWei(_bal.toNumber()))
```

### Resources

#### Ethereum testnet

Testnet tools: http://dashboard.testnet.kryptopal.io/#stats

#### API/Hosted Node

Web UI here: http://api.testnet.kryptopal.io:8080/swagger-ui.html

Docs here: https://documenter.getpostman.com/view/3526214/kryptopalapi/RW1Yofsg

#### SDK examples:

Android: https://github.com/KryptoPal/sample-android-project/settings

Docs: https://github.com/KryptoPal/docs

#### ERC 777 token implementation Example:

code here: https://github.com/KryptoPal/kpx

#### Upgradeable Contracts and Registries

Unstructured Upgrades (reccomended): https://github.com/nori-dot-eco/contracts

Eternal Storage Upgrades (not reccomended): https://github.com/nori-dot-eco/EternalStorageUpgrades

#### Misc Tools:

Contract State Inspector: https://github.com/nori-dot-eco/contract-state-util
