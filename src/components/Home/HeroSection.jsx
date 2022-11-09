import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const HeroSection = () => {
	const router = useRouter();

	return (
		<Flex align="center" justify="space-around" my="100px" direction={{ base: "column", md: "unset" }} gap="2">
			<Box w={{ base: "100%", md: "40%" }}>
				<Text fontWeight="500" fontSize="4xl">
					Tìm <span> công thức nấu ăn</span> hoàn hảo cho bạn
				</Text>
				<Text color="gray.500" fontSize="sm">
					Đây là nơi liệt kê công thức nấu ăn
				</Text>
				<Flex align="center" gap="2" mt="2">
					<Button rounded="xl" colorScheme="orange" onClick={() => router.push("/meals")}>
						Khám phá
					</Button>
					<Button rounded="xl" colorScheme="blackAlpha" onClick={() => router.push("/savedMeals")}>
						Công thức đã lưu
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
