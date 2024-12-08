// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Script} from "forge-std/Script.sol";
import {NFTCollection} from "../contracts/NFTCollection.sol";

contract DeployNFTCollection is Script {
    function run() external {
        vm.startBroadcast();
        NFTCollection collection = new NFTCollection();
        console.log("NFTCollection deployed to:", address(collection));
        vm.stopBroadcast();
    }
}
