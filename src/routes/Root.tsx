import { Box, Flex, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Root = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir={"column"} gap={3} px={5}>
      <Flex gap={3} p={4} justifyContent={"space-between"}>
        <Heading as="h3" fontSize={"xl"}>
          Logo Logo Logo
        </Heading>
        <ConnectButton />
      </Flex>

      <Box flex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Root;
