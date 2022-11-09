import { Box, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Box my="10">
			<Text fontSize="2xl" fontWeight="700">
				Food Source is a reliable food importer and distributor in Vietnam since 2016.
			</Text>
			<Text fontSize="xl">
				We are dedicated to sourcing premium quality food products for leading businesses within the retail and hospitality
				industry.
			</Text>
			<br />
			<Text color="gray.500">
				Food Source is a reliable food importer and distributor in Vietnam since 2016. The company is part of Mulwarra Exports
				Ltd., based in Sydney, Australia. Currently, we cover Vietnam and UAE and are looking to grow our footprint in the coming
				years.
			</Text>
		</Box>
	);
};

export default About;
