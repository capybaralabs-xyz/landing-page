import React, { useEffect, useState } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { Box,Text,Flex,Image } from '@chakra-ui/react';
import useTypingEffect from '../hooks/useTypingText';
import MaskLeft from '../assets/mask_l.png'
import MaskRight from '../assets/mask_r.png'
import _ from 'lodash'
import { Introductions } from '../utils';



const Home = () => {
  const [tooltip, setTooltip] = useState({ visible: false, position: { x: 0, y: 0 } });
  const [intro, setIntro] = useState<any>({})
  useEffect(() => {
    const container = document.getElementById('lottie')
    const animation = lottie.loadAnimation({
      container: container!, // 动画容器
      renderer: 'svg',
      loop: true, 
      autoplay: false, 
      path: 'data_all3.json' 
    });
    animation.addEventListener('data_ready', () => {
        console.log('ready')
        animation.play()
    })
    
    const container2 = document.getElementById('content')
    const animation2 = lottie.loadAnimation({
      container: container2!, // 动画容器
      renderer: 'svg',
      loop: true, 
      autoplay: true, 
      path: 'P2/data.json' 
    });

    animation2.addEventListener('DOMLoaded', () => {
      const layers = container2!.querySelectorAll('svg>g>g');  // 获取所有图层
      const last8GElements = Array.from(layers).slice(-8);
      for(let i = 0; i < last8GElements.length; i++) {
        last8GElements[i].setAttribute('data-id', `${i+1}`)
      }
      // 为每个动物图层绑定事件
      const elements = container2!.querySelectorAll('[data-id]');
      elements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', () => setTooltip({ visible: false, position: { x: 0, y: 0 } }));
      });
    });

    // 监听 Lottie 动画中的元素的鼠标事件
    const handleMouseEnter = (event:any) => {
      const id = event.target.dataset.id;
      const rect = event.target.getBoundingClientRect();
      console.log("rect>>>", rect)
      setTooltip({
        visible: true,
        position: { x: event.x, y: event.y + window.scrollY },
      });
      // @ts-ignore
      setIntro(Introductions[`${id}`])
    };

  
    return () => {
      animation.destroy()
      container2!.querySelectorAll('[data-id]').forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', () => setTooltip({ visible: false, position: { x: 0, y: 0 } }));
      });
      animation2.destroy()
    };
  }, [])
  return (
    <>
    <Box>
      
      
      <Box id="lottie" position={'relative'}>

        <Box id="bg" position={'absolute'} top={0} left={0} right={0} bottom={0} background={'linear-gradient(180deg, #C6E3A0 -3.8%, #F9FBF8 100.99%)'}></Box>
      </Box>
    </Box>
    <Flex direction={'column'} position={"absolute"} top={{base: '3.7rem',sm: '4.7rem', md: '8.7rem', lg: '12rem', xl: '15rem'}} zIndex={1} justifyContent={'center'} alignItems={'center'} width={'100%'} color={'#fff'} gap={2} fontFamily={'Alata'}>
      <Box fontSize={{base: '1.8rem', sm: '2.8rem', md: '3.6rem',lg: '4.8rem', xl: '6.4rem'}} fontWeight={'400'} dropShadow={'0px 0px 30px 0px #00000040'} id='titleEle' fontFamily={'Alata'}>Robust Code. Friend to All.</Box>
    </Flex>

      <Text position={'relative'} zIndex={2} color={'#30241D'} fontSize={{base: '1.8rem', sm: '2.8rem', md: '3.6rem',lg: '4.8rem', xl: '6.4rem'}} w={'100%'} textAlign={'center'} fontFamily={'Alata'}>our teams</Text>
      <Box>
        <Box position={'relative'}>
          <Box width={'23.61%'} position={'absolute'} right={0} bottom={'-24%'}>
            <Image src={MaskRight} width={'100%'}/>
          </Box>
          <Box id="content"></Box>
        </Box>
        {tooltip.visible && (
        <Box
          style={{
            position: 'absolute',
            top: tooltip.position.y + 10,
            left: tooltip.position.x + 10,
            backgroundColor: '#fff',
            boxShadow: '0px 4px 22.8px 0px #00000040',
            color: '#000',
            padding: '16px',
            borderRadius: '14px',
            pointerEvents: 'none',
            zIndex:2
          }}
          fontSize={'16px'}
          
          maxW={'260px'}
        >
          <Text>{intro.name}</Text>
          <Text fontSize={'12px'} opacity={'0.4'}>{intro.position}</Text>
          <Text>{intro.intro}
          </Text>
          
        </Box>
      )}
      </Box>
    </>
    
  );
};

export default Home;
