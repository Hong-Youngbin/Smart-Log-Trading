import type { AppProps } from "next/app";
import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
//import { config } from '@fortawesome/fontawesome-svg-core';
//import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from "./navbar";
import Footer from "./footer";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "sepolia";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThirdwebProvider>
  );
}

export default MyApp;
