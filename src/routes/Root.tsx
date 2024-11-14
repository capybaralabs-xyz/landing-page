import { Box, Flex, Image } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "../components/Header";
import lottie from "lottie-web";
import { useEffect } from "react";
import MaskLeft from '../assets/mask_l.png'
import MaskRight from '../assets/mask_r.png'
const Root = () => {
  return (
    <Flex w="100vw" minH={'100vh'} flexDir={"column"} gap={3} background={'#F9FBF8'} overflow={'hidden'}>
      
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
