import { Box, Flex, Heading } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Header from "../components/Header";
import lottie from "lottie-web";
import { useEffect } from "react";
const Root = () => {
  // useEffect(() => {
  //   // const titleEle = document.getElementById('titleEle')
  //   // typingTitle(titleEle!)
  //   const animation = lottie.loadAnimation({
  //     container: document.getElementById('bg')!, // 动画容器
  //     renderer: 'svg',
  //     loop: true, 
  //     autoplay: true, 
  //     path: 'bg_data.json' 
  //   });
  //   console.log('animation>>>>',animation)
  // }, [])
  return (
    <Flex w="100vw" flexDir={"column"} gap={3} background={'linear-gradient(180deg, #C6E3A0 -3.8%, #F9FBF8 100.99%)'}>
      {/* <Box id="bg" position={'absolute'} top={'0'} left={'0'} w="100vw"></Box> */}
      <Header />
      <Box flex={1}>
        <Outlet />
      </Box>
      <Box backdropFilter={'blur(125px)'} background={'#90C147'} 

      ></Box>
    </Flex>
  );
};

export default Root;
