import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import DotLoader from "react-spinners/DotLoader";

const Categories = ({ categories, catError, catLoading, selectedCat, setSelectedCat, setQuery }) => {
	if (catLoading)
		return (
			<Center my="10">
				<DotLoader size={150} aria-label="Loading Spinner" data-testid="loader" color="#36d7b7" />
			</Center>
		);

	return (
		<Flex gap="3" py="5" align="center" flexWrap="wrap">
			{categories?.map((item) => (
				<Button
					colorScheme={selectedCat === item?.strCategory ? "pink" : "cyan"}
					key={item?.idCategory}
					rounded="lg"
					onClick={() => {
						setSelectedCat(item?.strCategory);
						setQuery("");
					}}
				>
					{item?.strCategory}
				</Button>
			))}
		</Flex>
	);
};

export default Categories;
