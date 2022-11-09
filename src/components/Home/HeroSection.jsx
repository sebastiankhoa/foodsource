import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const HeroSection = () => {
	return (
		<Flex align="center" justify="space-around" my="100px" direction={{ base: "column", md: "unset" }} gap="2">
			<Box w={{ base: "100%", md: "40%" }}>
				<Text fontWeight="700" fontSize="5xl">
					Find The Perfect <span>Meal recipe</span> For You
				</Text>
				<Text color="gray.500">a listing website of meal recipe</Text>
				<Flex align="center" gap="2" mt="2">
					<Button rounded="xl" colorScheme="orange">
						Explore Meals
					</Button>
					<Button rounded="xl" colorScheme="blackAlpha">
						Saved Meals
					</Button>
				</Flex>
			</Box>
			<Box w={{ base: "100%", md: "50%" }}>
				<Image alt="hero" src="\images\hero_img.jpg" w="300px" h="300px" objectFit="cover" />
			</Box>
		</Flex>
	);
};

export default HeroSection;
