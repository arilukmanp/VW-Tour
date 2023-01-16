import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import CartProvider from "lib/context/cart/CartProvider";
import DestinationsProvider from "lib/context/destinations/destinationsProvider";
import DestinationDetail from "components/parts/common/destinationDetail";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <DestinationsProvider>
        <Component {...pageProps} />
        <DestinationDetail />
      </DestinationsProvider>
      <Analytics />
    </CartProvider>
  );
}
