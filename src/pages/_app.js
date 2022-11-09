import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/mirza";
import "@fontsource/pacifico";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import axios from "axios";

import "../styles/globals.css";
import { theme } from "../../chakra/theme";
import Layout from "../components/Layout";

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 1 * 60 * 60 * 1000,
			staleTime: 1 * 60 * 60 * 1000,
		},
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<Toaster position="bottom-right" toastOptions={{ style: { fontSize: "1.4rem" } }} />
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</ChakraProvider>
	);
}

export default MyApp;
