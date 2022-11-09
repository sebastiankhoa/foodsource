import { Badge, Box, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { GoPrimitiveDot } from "react-icons/go";
import BeatLoader from "react-spinners/BeatLoader";

import SearchBar from "../components/Meals/SearchBar";
import Categories from "../components/Meals/Categories";
import MealCard from "../components/Meals/MealCard";

//API get
const getCategories = async () => {
	const { data } = await axios.get("/categories.php");
	return data.categories;
};

const getMeals = async ({ queryKey }) => {
	const { data } = await axios.get(`filter.php?c=${queryKey[1]}`);
	return data?.meals || [];
};

const getQueryMeals = async ({ queryKey }) => {
	const { data } = await axios.get(`/search.php?s=${queryKey[1]}`);
	return data?.meals || [];
};

//===============================================================================
const Meals = () => {
	//usestate
	const [selectedCat, setSelectedCat] = useState("");
	const [query, setQuery] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	// console.log({ selectedCat });

	//useQuery from tanstack react query
	const { data: categories, isLoading: catLoading, isError: catError } = useQuery(["categories"], getCategories);
	const { data, isLoading, isError } = useQuery(["mealsByCategory", selectedCat], getMeals, { enabled: query === "" });
	const {
		data: queryData,
		isLoading: queryLoading,
		isError: queryError,
	} = useQuery(["mealsByQuery", query], getQueryMeals, { enabled: query !== "" });

	//set selected by frist food
	useEffect(() => {
		if (categories) {
			setSelectedCat(categories[0].strCategory);
		}
	}, [categories]);

	//set time to enter search term
	useEffect(() => {
		const timeout = setTimeout(() => {
			if (searchTerm) {
				setQuery(searchTerm);
				setSelectedCat("");
			} else {
				setQuery("");
				if (categories) {
					setSelectedCat(categories[0].strCategory);
				}
			}
		}, 300);

		return () => {
			setQuery("");
			clearTimeout(timeout);
		};
	}, [searchTerm, categories]);

	//----------------------------------JSX----------------------------------------
	return (
		<Box my="2">
			<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			<Flex align="center">
				<GoPrimitiveDot color="red" />
				<Text fontSize="sm">Search meals or select categories from below.</Text>
			</Flex>
			<Categories
				categories={categories}
				catError={catError}
				catLoading={catLoading}
				selectedCat={selectedCat}
				setSelectedCat={setSelectedCat}
				setQuery={setQuery}
			/>

			{(isLoading || catLoading) && (
				<Center my="10">
					<BeatLoader loading={isLoading || catLoading} />
				</Center>
			)}

			<Flex align="center" flexWrap="wrap" gap="3" justify="center">
				{/* Thuc an se hien ra khi bam vao cac nut ben duoi */}
				{!isLoading && !isError && data && data?.map((item) => <MealCard key={item?.idMeal} meal={item} />)}

				{/* Thuc an se hien ra khi dien vao o tim kiem */}
				{!queryLoading && !queryError && queryData && queryData?.map((item) => <MealCard key={item?.idMeal} meal={item} />)}

				{/* neu khong tim thay  */}
				{data && queryData && data.length === 0 && queryData.length === 0 && (
					<Center my="100px">
						<Text fontSize="2xl">No Meals found</Text>
					</Center>
				)}
			</Flex>
		</Box>
	);
};
export default Meals;
