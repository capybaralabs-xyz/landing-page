import React from "react";
import { Box, Flex, Image,Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MaskLeft from '../assets/mask_l.png'
import email from '../assets/email.png'
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
      <Flex w={'100%'} mb={'5rem'} fontSize={{base: '1.4rem', sm: '1.8rem', md: '2rem',lg: '2.6rem', xl: '3.2rem'}} justifyContent={'center'} alignItems={'center'} gap={'1rem'}><Text>connect us:</Text><Flex color={'rgba(172, 142, 125, 1)'} alignItems={'center'} gap={'0.5rem'}><Image src={email} width={{base: '1.4rem', md: '1.6rem',lg: '2.2rem', xl: '2.8rem'}}  mt={'0.3rem'}/> <Text>contact@capybaralabs.xyz</Text></Flex></Flex>
    </Flex>
  );
};

export default Root;
