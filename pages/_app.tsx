import "../styles/globals.css";
import type { AppProps } from "next/app";
import CartProvider from "lib/context/cart/CartProvider";
import DestinationsProvider from "lib/context/destinations/destinationsProvider";
import DestinationDetail from "components/parts/common/destinationDetail";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <CartProvider>
        <DestinationsProvider>
          <Component {...pageProps} />
          <DestinationDetail />
        </DestinationsProvider>
      </CartProvider>
    </main>
  );
}
