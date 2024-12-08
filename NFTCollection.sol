// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCollection is ERC721URIStorage, Ownable {
    uint256 public tokenIdCounter;

    constructor() ERC721("MyNFTCollection", "MNFT") {}

    function mintNFT(string memory tokenURI) external returns (uint256) {
        uint256 newTokenId = tokenIdCounter;
        tokenIdCounter++;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        return newTokenId;
    }
}
