import { Box, Flex, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "../components/Header";

const Root = () => {
  return (
    <Flex w="100vw" h="100vh" flexDir={"column"} gap={3} background={'linear-gradient(180deg, #C6E3A0 -3.8%, #F5F8F1 100.99%)'}>
      <Header />
      <Box flex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Root;
