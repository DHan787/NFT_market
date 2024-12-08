import StartAuction from "../components/StartAuction";
import BidNFT from "../components/BidNFT";

const AuctionPage = () => {
  return (
    <div>
      <h1>NFT Auction</h1>
      <StartAuction />
      <BidNFT auctionAddress="0xYourAuctionContractAddress" />
    </div>
  );
};

export default AuctionPage;
