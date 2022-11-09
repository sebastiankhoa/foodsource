import { Table, Box, Text, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import React from "react";

const MealTable = ({ ingredients }) => {
	return (
		<Box mt="10">
			<Text fontWeight="700" fontSize="2xl">
				Ingredients
			</Text>
			<TableContainer>
				<Table variant="simple" size="sm" colorScheme="green">
					<Thead>
						<Tr>
							<Th>Ingredient</Th>
							<Th>Measure</Th>
						</Tr>
					</Thead>
					<Tbody>
						{ingredients.map((item) => (
							<Tr key={item.index}>
								<Td>{item.ingredient}</Td>
								<Td>{item.measure}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default MealTable;
