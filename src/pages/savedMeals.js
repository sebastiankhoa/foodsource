import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { useQueries } from "@tanstack/react-query";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { BeatLoader } from "react-spinners";

import { getSingleMeal } from "./meal/[id]";

const SaveMealPage = () => {
	const [savedMealId, setSavedMealId] = useState([]);
	// console.log(savedMealId);

	const queries = savedMealId.map((id, _i) => ({
		key: _i,
		queryKey: ["singleMeal", id],
		queryFn: getSingleMeal,
	}));

	const result = useQueries({ queries });

	useEffect(() => {
		if (localStorage.getItem("savedMeal")) {
			setSavedMealId(JSON.parse(localStorage.getItem("savedMeal")));
		}
	}, []);

	return (
		<Box my="100px">
			<Text fontSize="2xl" fontWeight="700" textAlign="center">
				My Save Meals
			</Text>
			{savedMealId.length <= 0 && (
				<Center>
					<Text>You have no meal</Text>
				</Center>
			)}
			<Flex align="center" flexWrap="wrap" gap="2" justify="center" mt="10">
				{result &&
					result.map(({ data, isLoading }, _i) => {
						if (isLoading) {
							return (
								<Center key={_i}>
									<BeatLoader />
								</Center>
							);
						}

						return (
							<Link href={`meals/${data?.idMeal}`} key={_i}>
								<Flex
									direction="column"
									align="center"
									justify="center"
									w="200px"
									h="120px"
									bg="gray.200"
									shadow="lg"
									overflow="hidden"
									px="2"
								>
									<Box overflow="hidden" h="50px">
										<Text fontWeight="700">{data?.strMeal}</Text>
									</Box>
									<Flex align="center" gap="1">
										<GoPrimitiveDot color="red" />
										<Text>Category: {data?.strCategory}</Text>
									</Flex>
									<Flex align="center" gap="1">
										<GoPrimitiveDot color="red" />
										<Text>Area: {data?.strArea}</Text>
									</Flex>
								</Flex>
							</Link>
						);
					})}
			</Flex>
		</Box>
	);
};

export default SaveMealPage;
