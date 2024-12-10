import { useAccount, useContractRead } from "wagmi";
import contractABI from "../utils/contractABI.json";

const DisplayNFTs = () => {
  const { address } = useAccount();

  const { data: nfts } = useContractRead({
    address: "0xYourNFTContractAddress",
    abi: contractABI,
    functionName: "tokenOfOwnerByIndex",
    args: [address, 0],
  });

  return (
    <div>
      {nfts?.map((nft) => (
        <div key={nft.tokenId}>
          <img src={`ipfs://${nft.tokenURI}`} alt={nft.tokenId} />
        </div>
      ))}
    </div>
  );
};

export default DisplayNFTs;
