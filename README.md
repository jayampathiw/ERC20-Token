# ERC20 Token & Decentralized Exchange (DEX) DApp

This project includes two main smart contracts: one for creating an ERC20 token ("Tim Coin") and another for a decentralized exchange (DEX) that allows users to buy, sell, and manage token transfers. The project comes with automated tests and a frontend interface for user interaction.

## Overview

The ERC20 & DEX DApp is a decentralized application built on the Ethereum blockchain that enables users to interact with an ERC20 token and trade it on a decentralized exchange. This project showcases the use of smart contracts for token creation, buying, and selling tokens in a decentralized environment.

## Features

- Deploy ERC20 token with an initial supply.
- Buy and sell tokens through the DEX smart contract.
- View token prices, available tokens, and account balance.
- Grant token transfer approval to the DEX for trading.

## Technology Stack

- **Solidity**: Smart contract development.
- **Hardhat**: Ethereum development environment.
- **Ethers.js**: Ethereum wallet implementation and utilities.
- **HTML/CSS/JavaScript**: Frontend user interface.
- **Ganache-CLI**: Local Ethereum blockchain for testing.

## Project Structure

```plaintext
erc20-dex-app/
├── contracts/
│   ├── Token.sol
│   └── DEX.sol
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── styles.css
├── scripts/
│   └── deploy.js
├── test/
│   ├── Token.test.js
│   └── DEX.test.js
├── hardhat.config.js
├── package.json
└── README.md
```

## Smart Contracts

### Token.sol

The `Token.sol` file defines an ERC20 token contract:

- Creates "Tim Coin" (TIM) with a fixed initial supply assigned to the deployer.
- Includes standard ERC20 functions such as `approve`, `transfer`, and `balanceOf`.

### DEX.sol

The `DEX.sol` file implements a decentralized exchange contract:

- **Buy Tokens**: Users can buy tokens with Ether at a predefined price.
- **Sell Tokens**: Allows the contract owner to sell tokens by transferring them from approved accounts.
- **Withdraw Tokens and Funds**: The owner can withdraw unsold tokens and accumulated Ether from the contract.

## Setup and Installation

1.  Clone the repository:

    ```
    git clone https://github.com/yourusername/erc20-dex-dapp.git
    cd erc20-dex-dapp
    ```

2.  Install dependencies:

    ```
    npm install
    ```

3.  Compile the smart contracts:

    ```
    npx hardhat compile
    ```

4.  Deploy the smart contracts on a local Ethereum network:

    ```
    npx hardhat node
    npx hardhat run scripts/deploy.js --network localhost
    ```

5.  Update the contract addresses in the frontend file (`frontend/index.html`) with the deployed contract addresses.

## Running the DApp

1.  Start a local Ethereum network (if not already running):

    ```
    npx hardhat node
    ```

2.  Open the `frontend/index.html` file in a web browser with MetaMask installed and connected to your local Ethereum network (usually `http://localhost:8545`).

3.  Interact with the DApp using the provided UI to check prices, buy tokens, sell tokens, and manage access permissions.

## Testing

Run the test suite using Hardhat:

    ```
    npx hardhat test
    ```

For test coverage information:

    ```
    npx hardhat coverage
    ```

## Frontend

The frontend (`frontend/index.html`) provides a simple user interface with navigation for easy interaction with the smart contracts. Key features include:

- **Dashboard**: Displays the current token price, available tokens, and user's token balance.
- **Grant DEX Access**: Allows users to grant the DEX contract permission to transfer tokens on their behalf.
- **Sell Tokens**: Enables the DEX owner to sell tokens.
- **Buy Tokens**: Users can buy tokens by specifying the amount and sending the required Ether.

```

```
