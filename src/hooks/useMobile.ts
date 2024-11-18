import { useEffect, useState } from 'react';


export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [innherHeight, setInnherHeight] = useState(0);
  function handleResize() {
    const isMobile = getIsMobile();
    setIsMobile(isMobile);
  }
  useEffect(() => {
    // add event listener
    window.addEventListener('resize', handleResize);
    // initial state
    handleResize();
    if (!innherHeight) {
      setInnherHeight(Math.max(window.innerHeight, 610));
    }
    // remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
  };
};
const isMobileDevice = () => {
  // @ts-ignore
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    userAgent
  );
};
export function getIsMobile() {
  const windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const isMobile =
    (typeof windowSize?.width === 'number' && windowSize?.width < 768) ||
    isMobileDevice();
  return isMobile;
}

