import React, { useEffect, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { Box,Text,Flex } from '@chakra-ui/react';
import useTypingEffect from '../hooks/useTypingText';
import _ from 'lodash'
const Home = () => {
 
  useEffect(() => {
    const container = document.getElementById('lottie')
    const animation = lottie.loadAnimation({
      container: container!, // 动画容器
      renderer: 'svg',
      loop: true, 
      autoplay: false, 
      path: 'data_all2.json' 
    });
    animation.addEventListener('data_ready', () => {
        console.log('ready')
        animation.play()
    })
    
    // const container2 = document.getElementById('content')
    // const animation2 = lottie.loadAnimation({
    //   container: container2!, // 动画容器
    //   renderer: 'svg',
    //   loop: true, 
    //   autoplay: true, 
    //   path: 'content.json' 
    // });
    const handleResize = _.debounce(() => {
      if (container) {
        animation.pause()
        setTimeout(() => {
          animation.play()
        }, 2000)
      }
    }, 200);
  
    window.addEventListener('resize', handleResize);
    
  
    return () => {
      window.removeEventListener('resize', handleResize);
      animation.destroy()
      // animation2.destroy()
    };
  }, [])

  

  
  return (
    <>
    <div id="lottie"></div>
      <Flex direction={'column'} position={"absolute"} top={{base: '3.7rem',sm: '4.7rem', md: '8.7rem', lg: '12rem', xl: '15rem'}} zIndex={1} justifyContent={'center'} alignItems={'center'} width={'100%'} color={'#fff'} gap={2} fontFamily={'Alata'}>
        <Box fontSize={{base: '1.8rem', sm: '2.8rem', md: '3.6rem',lg: '4.8rem', xl: '6.4rem'}} fontWeight={'400'} dropShadow={'0px 0px 30px 0px #00000040'} id='titleEle'>Robust Code. Friend to All.</Box>
      </Flex>
      {/* <div id="content"></div> */}
    </>
    
  );
};

export default Home;
