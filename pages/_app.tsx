import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import CartProvider from "lib/context/CartProvider";
import DestinationDetail from "components/destinationDetail";
import DestinationsProvider from "lib/context/destinations/destinationsProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <DestinationsProvider>
        <Component {...pageProps} />;
        <DestinationDetail />
      </DestinationsProvider>
      <Analytics />
    </CartProvider>
  );
}
