import { useContractWrite, usePrepareContractWrite } from "wagmi";
import contractABI from "../utils/contractABI.json";

const MintNFT = () => {
  const { config } = usePrepareContractWrite({
    address: "0xYourNFTContractAddress",
    abi: contractABI,
    functionName: "mintNFT",
    args: ["ipfs://<YourImageCID>"],
  });

  const { write } = useContractWrite(config);

  return (
    <div>
      <input type="text" placeholder="Enter IPFS URL" id="ipfsURL" />
      <button onClick={() => write?.()}>Mint NFT</button>
    </div>
  );
};

export default MintNFT;
