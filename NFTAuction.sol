// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract NFTAuction {
    address public seller;
    uint256 public highestBid;
    address public highestBidder;
    address public nftContract;
    uint256 public tokenId;
    uint256 public auctionEndTime;

    mapping(address => uint256) public pendingReturns;

    constructor(address _nftContract, uint256 _tokenId, uint256 _biddingTime) {
        seller = msg.sender;
        nftContract = _nftContract;
        tokenId = _tokenId;
        auctionEndTime = block.timestamp + _biddingTime;
    }

    function bid() external payable {
        require(block.timestamp < auctionEndTime, "Auction ended");
        require(msg.value > highestBid, "Bid too low");

        if (highestBid != 0) {
            pendingReturns[highestBidder] += highestBid;
        }

        highestBidder = msg.sender;
        highestBid = msg.value;
    }

    function withdraw() external {
        uint256 amount = pendingReturns[msg.sender];
        require(amount > 0, "No funds to withdraw");

        pendingReturns[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function finalizeAuction() external {
        require(block.timestamp >= auctionEndTime, "Auction not ended");
        require(msg.sender == seller, "Not the seller");

        IERC721(nftContract).transferFrom(seller, highestBidder, tokenId);
        payable(seller).transfer(highestBid);
    }
}
