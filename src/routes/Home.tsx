import React, { useEffect, useState } from 'react';
import lottie from 'lottie-web';
import { Box,Text,Flex,Image} from '@chakra-ui/react';

import MaskRight from '../assets/mask_r.png'
import { Introductions, Introductions_M } from '../utils';
import { useMobile } from '../hooks/useMobile';



const Home = () => {
  const {isMobile} = useMobile()
  const [tooltip, setTooltip] = useState({ visible: false, position: { x: 0, y: 0 } });
  const [intro, setIntro] = useState<any>({})
  const [isTopLottieReady, setIsTopLottieReady] = useState(false)
  
  // 监听 Lottie 动画中的元素的鼠标事件
  const handleMouseEnter = (event: any) => {
    const id = event.target.dataset.id;
    const rect = event.target.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // 获取屏幕尺寸
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    // position
    let tooltipLeft = mouseX + window.scrollX;
    let tooltipTop = mouseY + window.scrollY - 60; // 上方显示 Popover

    if (tooltipLeft < 0) {
      tooltipLeft =30
    }
    // right
    if (tooltipLeft + 200 > screenWidth) {
      tooltipLeft = mouseX + window.scrollX - 200; // 超过右边界时，向左调整
    }

    // bottom
    if (tooltipTop + 100 > screenHeight) {
      tooltipTop = mouseY + window.scrollY - 160; // 超过下边界时，向上调整
    }

    if (isMobile) {
      tooltipLeft = (screenWidth - rect.width) /4
    }
    setTooltip({
      visible: true,
      position: { x: tooltipLeft, y: tooltipTop },
    });
    // @ts-ignore
    const _intro = isMobile ? Introductions_M[`${id}`] : Introductions[`${id}`]
    setIntro(_intro)
  };
  const handleMouseLeave = () => {
    setTooltip({visible: false, position: {x: 0, y: 0}})
  }
  const handleMouseMove = (event:any) => {
    const rect = event.target.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    // 获取屏幕尺寸
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    // position
    let tooltipLeft = mouseX + window.scrollX;
    let tooltipTop = mouseY + window.scrollY - 60; // 上方显示 Popover

    if (tooltipLeft < 0) {
      tooltipLeft =30
    }
    // right
    if (tooltipLeft + 260 > screenWidth) {
      tooltipLeft = mouseX + window.scrollX - 200; // 超过右边界时，向左调整
    }

    // bottom
    if (tooltipTop + 260 > screenHeight) {
      tooltipTop = mouseY + window.scrollY - 100; // 超过下边界时，向上调整
    }

    if (isMobile) {
      tooltipLeft = (screenWidth - rect.width) /4
    }

    setTooltip({
      visible: true,
      position: { x: tooltipLeft, y: tooltipTop },
    });
  };

  useEffect(() => {
    const container = document.getElementById('lottie')
    const animation = lottie.loadAnimation({
      container: container!, // 动画容器
      renderer: 'svg',
      loop: true, 
      autoplay: false, 
      path: 'P1/mobile/data.json',
      rendererSettings: {
        progressiveLoad: true, // 优化加载性能
        preserveAspectRatio: 'xMidYMid meet',
      },
    });
    animation.addEventListener('data_ready', () => {
        setIsTopLottieReady(true)
        animation.play()
    })
    
    const container2 = document.getElementById('content')
    
    const animation2 = lottie.loadAnimation({
      container: container2!, // 动画容器
      renderer: 'svg',
      loop: true, 
      autoplay: true, 
      path: isMobile ? 'P2/mobile/data.json': 'P2/data.json'
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
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      animation.destroy()
      container2!.querySelectorAll('[data-id]').forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      animation2.destroy()
    };
  }, [isMobile])
  return (
    <>
    <Box>
      <Box id="lottie" position={'relative'} width={isMobile ? '914px': 'auto'} height={isMobile ? '508px': 'auto'} left={isMobile ? '50%': 0} ml={isMobile ? '-457px': 0}>
        <Box id="bg" position={'absolute'} top={0} left={0} right={0} bottom={0} background={'linear-gradient(180deg, #C6E3A0 -3.8%, #F9FBF8 100.99%)'}></Box>
      </Box>
    </Box>
    <Flex direction={'column'} position={"absolute"} top={{base: '8%',sm: '7%', md: '9%', lg: '8%'}} lineHeight={{base: '1.2', sm: 'normal'}} zIndex={1} justifyContent={'center'} alignItems={'center'} width={'100%'} color={'#fff'} gap={2} fontFamily={'Alata'}>
      <Box fontSize={{base: '3.2rem', md: '4rem',lg: '4.8rem', xl: '6.4rem'}} fontWeight={'400'} display={'flex'} flexDirection={{base: 'column', sm: 'row'}} dropShadow={'0px 0px 30px 0px #00000040'} id='titleEle' fontFamily={'Alata'} gap={'1rem'}><Text>Robust Code.</Text><Text>Friend to All.</Text></Box>
    </Flex>
    
      {isTopLottieReady && <Text position={'relative'} zIndex={2} color={'#30241D'} fontSize={{base: '2.4rem', sm: '2.8rem', md: '3.6rem',lg: '4.8rem', xl: '6.4rem'}} w={'100%'} textAlign={'center'} fontFamily={'Alata'}>our teams</Text>}
      <Box>
        <Box position={'relative'} pb={{base: '2rem', md: '3rem',lg: '4.2rem', xl: '5.2rem'}}>
          <Box width={'23.61%'} position={'absolute'} right={0} top={{base: '0%', md: '-60%',lg: '-60%', xl: '-50%'}}>
            <Image src={MaskRight} width={'100%'}/>
          </Box>
          <Box id="content" mt={isMobile ? '-5rem': 0}></Box>
        </Box>
        {tooltip.visible && (
        <Box
          style={{
            position: 'absolute',
            top: tooltip.position.y,
            left: tooltip.position.x,
            backgroundColor: '#fff',
            boxShadow: '0px 4px 22.8px 0px #00000040',
            color: '#000',
            padding: '16px',
            borderRadius: '14px',
            pointerEvents: 'none',
            zIndex:2
          }}
          fontSize={'16px'}
          
          width={'260px'}
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
