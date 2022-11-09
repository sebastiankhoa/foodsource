import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<Flex align="center" justify="space-between" py="2" px={{ base: "unset", md: "3" }} bg="gray.200">
			<Link href="/">
				<Image alt="logo" src="\images\food.jpg" w="80px" cursor="pointer" />
			</Link>
			<Flex align="center" gap={{ base: "2", md: "5" }}>
				<Link href="/meals">Các món ăn</Link>
				<Link href="/savedMeals">Món ăn đã lưu</Link>
			</Flex>
		</Flex>
	);
};

export default Navbar;
