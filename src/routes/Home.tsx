import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { Box,Text,Flex } from '@chakra-ui/react';
import useTypingEffect from '../hooks/useTypingText';
const Home = () => {
  // const title = "Robust Code. Friend to All.";
  // const {addNextCharacter: typingTitle, complete} = useTypingEffect(title);
  
  useEffect(() => {
    // const titleEle = document.getElementById('titleEle')
    // typingTitle(titleEle!)
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie')!, // 动画容器
      renderer: 'svg',
      loop: true, 
      autoplay: true, 
      path: 'data.json' 
    });
    console.log('animation>>>>',animation)
  }, [])

  
  return (
    <>
    <div id="lottie"></div>
      <Flex direction={'column'} position={"absolute"} top={{base: '3.7rem',sm: '4.7rem', md: '8.7rem', lg: '12rem', xl: '15rem'}} zIndex={1} justifyContent={'center'} alignItems={'center'} width={'100%'} color={'#fff'} gap={2} fontFamily={'Alata'}>
        <Box fontSize={{base: '1.8rem', sm: '2.8rem', md: '3.6rem',lg: '4.8rem', xl: '6.4rem'}} fontWeight={'400'} dropShadow={'0px 0px 30px 0px #00000040'} id='titleEle'>Robust Code. Friend to All.</Box>
      </Flex>
    
    </>
    
  );
};

export default Home;
