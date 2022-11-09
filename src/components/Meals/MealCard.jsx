import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const MealCard = ({ meal }) => {
	return (
		<Link href={`/meal/${meal?.idMeal}`}>
			<Box
				w="280px"
				h="320px"
				shadow="lg"
				overflow="hidden"
				rounded="20px"
				bgGradient="linear(to-r,red.500,blue.500)"
				_hover={{ opacity: "90%", transform: "scale(1.01)" }}
				transition="0.5s"
				cursor="pointer"
				p="5"
			>
				<Image alt="meal" src={meal?.strMealThumb} w="250px" h="250px" objectFit="cover" loading="lazy" rounded="10px" />
				<Flex h="50px" align="center" justify="center">
					<Text fontSize="9pt" color="white" textAlign="center">
						{meal?.strMeal}
					</Text>
				</Flex>
			</Box>
		</Link>
	);
};

export default MealCard;
