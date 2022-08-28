import { FC, useEffect, useState } from 'react'

interface IUseScrollProps {
  scrollTarget: number
}

const useScroll = (scrollTarget:number) => {
  const [scrollPosition, setscrollPosition] = useState(0)
  const [isScrolledBeyound, setisScrolledBeyound] = useState(false)
  const handleScroll = () => {
    const position = window.pageYOffset;
    if(scrollTarget < position) {
      setisScrolledBeyound(true)
    } else{
      setisScrolledBeyound(false)
    }
    setscrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return {scrollPosition, isScrolledBeyound}
}

export default useScroll