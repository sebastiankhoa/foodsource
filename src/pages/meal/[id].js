import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { GoPrimitiveDot } from "react-icons/go";
import MealTable from "../../components/MealDetail/MealTable";
import toast from "react-hot-toast";
import { FaHeartBroken, FaHeart } from "react-icons/fa";

export const getSingleMeal = async ({ queryKey }) => {
	const { data } = await axios.get(`/lookup.php?i=${queryKey[1]}`);
	return data?.meals?.[0];
};

const MealDetail = () => {
	const router = useRouter();
	const { id } = router.query;

	const [isSaved, setIsSaved] = useState(false);

	const { data, isLoading, isError } = useQuery(["singleMeal", id], getSingleMeal);

	useEffect(() => {
		if (localStorage.getItem("savedMeal")) {
			const savedMeal = JSON.parse(localStorage.getItem("savedMeal"));
			if (savedMeal.includes(id)) {
				setIsSaved(true);
			} else {
				setIsSaved(false);
			}
		} else {
			localStorage.setItem("savedMeal", JSON.stringify([]));
		}
	}, [id]);

	if (isLoading) {
		return (
			<Center my="10">
				<BeatLoader />
			</Center>
		);
	}

	const { strMealThumb, strMeal, strCategory, strArea, strTags, strInstructions } = data;

	const ingredientsKey = Object.keys(data)
		.filter((key) => key.startsWith("strIngredient"))
		.filter((key) => data[key] !== "" && data[key] !== null);

	const ingredients = ingredientsKey.map((key, _i) => ({
		index: _i + 1,
		ingredient: data[key],
		measure: data[`strMeasure${_i + 1}`],
	}));

	const handleSaveMeal = () => {
		const savedMeal = JSON.parse(localStorage.getItem("savedMeal"));

		if (!isSaved) {
			savedMeal.push(data.idMeal);
			localStorage.setItem("savedMeal", JSON.stringify(savedMeal));
			toast.success("Meal saved succesfully !");
			setIsSaved(true);
		} else {
			savedMeal.splice(savedMeal.indexOf(data.idMeal), 1);
			localStorage.setItem("savedMeal", JSON.stringify(savedMeal));
			setIsSaved(false);
			toast.error("Meal removed");
		}
	};

	return (
		<Flex direction="column" align="center" my="100px" w="full">
			<Flex direction={{ base: "column", md: "unset" }} align="center" justify="center" gap="5" w="full">
				<Box w={{ base: "100%", md: "30%" }} rounded="20px" overflow="hidden">
					<Image alt="food" src={strMealThumb} w="full" h="280px" objectFit="cover" />
				</Box>
				<Box w={{ base: "100%", md: "40%" }}>
					<Text fontWeight="700" fontSize="3xl">
						{strMeal}
					</Text>
					<Flex align="center" gap="1">
						<GoPrimitiveDot color="red" />
						<Text>Category: {strCategory}</Text>
					</Flex>
					<Flex align="center" gap="1">
						<GoPrimitiveDot color="red" />
						<Text>Area : {strArea}</Text>
					</Flex>
					<Flex align="center" gap="1">
						<GoPrimitiveDot color="red" />
						<Text>Tags: {strTags?.split(",").join(", ")}</Text>
					</Flex>
					<Button
						colorScheme={isSaved ? "red" : "facebook"}
						leftIcon={isSaved ? <FaHeartBroken color="white" /> : <FaHeart />}
						mt="1"
						onClick={handleSaveMeal}
					>
						{isSaved ? "Remove" : "Save"} Meal
					</Button>
				</Box>
			</Flex>
			<MealTable ingredients={ingredients} />
			<Box mt="5">
				<Text fontSize="3xl" fontWeight="700">
					Instructions
				</Text>
				<Text fontWeight="500" fontSize="sm">
					{strInstructions}
				</Text>
			</Box>
		</Flex>
	);
};

export default MealDetail;
