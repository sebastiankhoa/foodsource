import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Flex direction="column" bg="gray.200" align="center" py="2" gap="1">
			<Box>
				<Image alt="" src="\images\food.jpg" w="150px" />
			</Box>
			<Text>Tìm công thức nấu ăn hoàn hảo cho bạn</Text>
			<Text fontSize="sm">© 2022 All right reserved.</Text>
		</Flex>
	);
};

export default Footer;
