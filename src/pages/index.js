import { Box, Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import About from "../components/Home/About";
import HeroSection from "../components/Home/HeroSection";

export default function Home() {
	return (
		<>
			<Box>
				<HeroSection />
				<About />
			</Box>
		</>
	);
}
