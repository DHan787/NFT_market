import { ethers } from "ethers";
import { createClient, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { goerli } from "wagmi/chains";
import NFTCollectionABI from "./NFTCollectionABI.json";
import NFTAuctionABI from "./NFTAuctionABI.json";

// Configure chains and providers
const { provider, webSocketProvider } = configureChains(
  [goerli], // Replace with the appropriate chain, e.g., goerli for Tenderly
  [publicProvider()]
);

// Wagmi Client
export const wagmiClient = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

// NFT Collection Contract Configuration
export const NFTCollectionContract = {
  address: "0xYourNFTContractAddress", // Replace with your deployed NFT contract address
  abi: NFTCollectionABI,
};

// NFT Auction Contract Configuration
export const NFTAuctionContract = {
  address: "0xYourAuctionContractAddress", // Replace with your deployed Auction contract address
  abi: NFTAuctionABI,
};

// Helpers for Interacting with Contracts
export const getNFTCollectionContract = (signerOrProvider: ethers.Signer | ethers.providers.Provider) => {
  return new ethers.Contract(
    NFTCollectionContract.address,
    NFTCollectionContract.abi,
    signerOrProvider
  );
};

export const getNFTAuctionContract = (signerOrProvider: ethers.Signer | ethers.providers.Provider) => {
  return new ethers.Contract(
    NFTAuctionContract.address,
    NFTAuctionContract.abi,
    signerOrProvider
  );
};
