import { AppProps } from "next/app";
import { WagmiConfig } from "wagmi";
import { wagmiClient } from "../utils/contract";
import "../styles/globals.css"; // Add your global styles here

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
};

export default MyApp;
