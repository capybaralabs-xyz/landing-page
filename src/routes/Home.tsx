import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { Box,Text,Flex } from '@chakra-ui/react';
import useTypingEffect from '../hooks/useTypingText';
const Home = () => {
  const title = "welcome to capybara labs";
  const {addNextCharacter: typingTitle, complete} = useTypingEffect(title);
  const content = "capybara labs, formed in 2024, is a proprietary trading firm that aims to capitalize on assymetries in the cryptocurrency markets."
  const {addNextCharacter: typingContent} = useTypingEffect(content, 50);
  
  useEffect(() => {
    const titleEle = document.getElementById('titleEle')
    typingTitle(titleEle!)
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie')!, // 动画容器
      renderer: 'svg',
      loop: true, 
      autoplay: true, 
      path: 'data.json' 
    });
    console.log('animation>>>>',animation)
  }, [])

  useEffect(() => {
    if (complete) {
      const contentEle = document.getElementById('contentEle')
      typingContent(contentEle!)
    }
  }, [complete])
  return (
    <>
    <div id="lottie"></div>
      <Flex direction={'column'} position={{base: 'relative',lg: "absolute"}} top={{base: 0, lg: 12, xl: 24}} zIndex={1} justifyContent={'center'} alignItems={'center'} width={'100%'} color={'#fff'} gap={2} fontFamily={'Alata'}>
        <Box fontSize={{base: 28, sm: 36, md: 36,lg: 48, xl: 64}} fontWeight={'400'} dropShadow={'0px 0px 30px 0px #00000040'} id='titleEle'></Box>
        <Flex justifyContent={'flex-start'} fontSize={{base: 16, sm: 20, xl: 32}} lineHeight={{base: 7, lg: 6, xl: 9}} maxW={{base: '90%', md: '80%', lg: '660px', xl: '994px'}} direction={'column'} textAlign={'center'} px={4} id='contentEle'>
          {/* {displayedContent} */}
        </Flex>
      </Flex>
    
    </>
    
  );
};

export default Home;
