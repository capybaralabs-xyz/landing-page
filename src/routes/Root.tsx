import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MaskLeft from '../assets/mask_l.png'
const Root = () => {
  return (
    <Flex overflowX={'hidden'} w="100vw" minH={'100vh'} flexDir={"column"}  fontFamily={'Alata'} gap={3} background={'#F9FBF8'} overflow={'hidden'}>
      
      <Header />
      <Box width={'25.75%'} position={'absolute'} left={0} bottom={0}>
        <Image src={MaskLeft} width={'100%'}/>
      </Box>
      <Box flex={1}>
        <Outlet />
      </Box>
      
    </Flex>
  );
};

export default Root;
