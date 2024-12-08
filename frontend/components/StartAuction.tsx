const StartAuction = () => {
  const { write } = useContractWrite({
    address: "0xYourAuctionContractAddress",
    abi: auctionContractABI,
    functionName: "startAuction",
    args: ["0xYourNFTContractAddress", tokenId, biddingTime],
  });

  return (
    <div>
      <button onClick={() => write?.()}>Start Auction</button>
    </div>
  );
};

export default StartAuction;
