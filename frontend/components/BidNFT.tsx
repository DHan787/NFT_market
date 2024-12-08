const BidNFT = ({ auctionAddress }) => {
  const { write } = useContractWrite({
    address: auctionAddress,
    abi: auctionContractABI,
    functionName: "bid",
    overrides: { value: ethers.utils.parseEther("0.1") },
  });

  return (
    <div>
      <button onClick={() => write?.()}>Place Bid</button>
    </div>
  );
};

export default BidNFT;
