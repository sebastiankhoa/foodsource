import { Container } from "@chakra-ui/react";
import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Food Source</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Container maxW="container.lg">{children}</Container>
			<Footer />
		</>
	);
};

export default Layout;
