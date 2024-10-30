import React, { useEffect } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ id, animationPath, loop = true, autoplay = true }:any) => {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById(id)!,
      renderer: 'svg',
      loop,
      autoplay,
      path: animationPath,
    });

    return () => {
      animation.destroy(); // 清理动画实例
    };
  }, [animationPath, loop, autoplay]);

  return <div id={id} />;
};

export default LottieAnimation;
