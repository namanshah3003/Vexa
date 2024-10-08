import React, { useState } from "react";
import { FiHome, FiLayers, FiFileText, FiUser, FiMenu } from "react-icons/fi";
import {
	Avatar,
	Button,
	Divider,
	Flex,
	Heading,
	IconButton,
	Link,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";
import AuthService from "../services/auth-service";

const Navbar = () => {
	const [navSize, setNavSize] = useState("large");
	const location = useLocation();

	const menuItems = [
		{
			path: "/dashboard",
			name: "Dashboard",
			icon: FiHome,
		},
		{
			path: "/projects",
			name: "Projects",
			icon: FiLayers,
		},
		{
			path: "/tickets",
			name: "Tickets",
			icon: FiFileText,
		},
		{
			path: "/administration",
			name: "Administration",
			icon: FiUser,
		},
	];

	return (
		<Flex
			pos="sticky"
			h="100vh"
			boxShadow="lg"
			direction="column"
			justifyContent="space-between"
			w={navSize === "small" ? "75px" : "250px"}
			background="gray.50"
		>
			<Flex
				p={5}
				direction="column"
				alignItems={navSize === "small" ? "center" : "flex-start"}
				as="nav"
			>
				<IconButton
					background="none"
					mt={5}
					_hover={{
						background: "none",
					}}
					icon={<FiMenu />}
					onClick={() => {
						if (navSize === "small") setNavSize("large");
						else setNavSize("small");
					}}
				/>

				{menuItems.map((item, index) => (
					<NavItem
						navSize={navSize}
						icon={item.icon}
						name={item.name}
						path={item.path}
						active={location.pathname === item.path}
					/>
				))}
			</Flex>

			<Flex p={5} direction="column" w="100%" alignItems="flex-start" mb={4}>
				<Divider
					borderColor="gray.300"
					display={navSize === "small" ? "none" : "flex"}
				/>

				<Popover placement="right-end">
					<PopoverTrigger>
						<Flex mt={4} align="center" cursor="pointer">
							<Avatar
								size="sm"
								name="Dan Abrahmov"
								src="https://bit.ly/dan-abramov"
								alignItems={navSize === "small" ? "center" : "flex-start"}
							/>
							<Flex
								direction="column"
								ml={4}
								display={navSize === "small" ? "none" : "flex"}
							>
								<Heading as="h3" size="xs">
									Dan Abrahmov
								</Heading>
								<Text fontSize="sm">Admin</Text>
							</Flex>
						</Flex>
					</PopoverTrigger>

					<PopoverContent w="fit-content">
						<PopoverBody>
							<PopoverArrow />
							<Button variant="link" p={1}>
								Profile
							</Button>
							<Divider />
							<Button variant="link" p={1} onClick={() => AuthService.logout()}>
								Logout
							</Button>
						</PopoverBody>
					</PopoverContent>
				</Popover>
			</Flex>
		</Flex>
	);
};

export default Navbar;