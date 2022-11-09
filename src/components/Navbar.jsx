import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<Flex align="center" justify="space-between" p={{ base: "unset", md: "2" }} bg="gray.200">
			<Link href="/">
				<Image alt="logo" src="\images\food.jpg" w="80px" />
			</Link>
			<Flex align="center" gap="5">
				<Link href="/meals">Meals</Link>
				<Link href="/savedMeals">Saved Lists</Link>
			</Flex>
		</Flex>
	);
};

export default Navbar;
