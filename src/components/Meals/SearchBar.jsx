import { Box, Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
	return (
		<Box mt="10">
			<Input
				placeholder="search..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				bg="gray.200"
				w={{ base: "300px", md: "400px" }}
			/>
		</Box>
	);
};
export default SearchBar;
