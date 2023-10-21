// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MinEthPayable {
    address public owner;
    uint256 public minRentEthAmount = 0.0001 ether; 
    uint256 public minBuyEthAmount = 0.001 ether; 

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action.");
        _;
    }

    receive() external payable {
        // Handle incoming ether
    }

    function setMinRentEthAmount(uint256 _amount) external onlyOwner {
        minRentEthAmount = _amount;
    }

    function setMinBuyEthAmount(uint256 _amount) external onlyOwner {
        minBuyEthAmount = _amount;
    }

    function rentMovie() external payable {
        require(msg.value >= minRentEthAmount, "Insufficient Ether sent to rent the movie.");
    }

    function buyMovie() external payable {
        require(msg.value >= minBuyEthAmount, "Insufficient Ether sent to buy the movie.");
        owner = msg.sender;
    }
}