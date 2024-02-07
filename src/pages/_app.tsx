import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { CartProvider } from '@/context/CartContext';
import { ProductProvider } from '@/context/ProductContext';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<CartProvider>
			<ProductProvider>
				<Header />

				<Component {...pageProps} />

				<Footer />
			</ProductProvider>
		</CartProvider>
	);
}
