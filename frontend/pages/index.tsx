import MintNFT from "../components/MintNFT";
import DisplayNFTs from "../components/DisplayNFTs";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Decentralized NFT App</h1>
      <MintNFT />
      <DisplayNFTs />
    </div>
  );
};

export default HomePage;
