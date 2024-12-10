// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {NFTAuction} from "../contracts/NFTAuction.sol";

contract DeployNFTAuction is Script {
    function run() external {
        vm.startBroadcast();
        NFTAuction auction = new NFTAuction(
            0xYourNFTContractAddress, // NFT contract address
            1,                        // Token ID
            3600                      // Bidding time in seconds
        );
        console.log("NFTAuction deployed to:", address(auction));
        vm.stopBroadcast();
    }
}
