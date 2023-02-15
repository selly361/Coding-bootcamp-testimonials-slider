import React, { ReactNode, createContext, useState } from "react";

import { ISlideShowContext } from "types";
import slideShowData from "data/data.json";
import { wrap } from "framer-motion";

export const SlideShowContextProvider = createContext<ISlideShowContext>({
  currentSlideIndex: 2,
  currentSlide: slideShowData[2],
  direction: -1,
  nextSlide: () => {},
  prevSlide: () => {},
});

interface IProps {
  children: ReactNode;
}

function SlideShowContext({ children }: IProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    wrap(2, slideShowData.length, 0)
  );
  const [direction, setDirection] = useState(-1);
  const [currentSlide, setCurrentSlide] = useState(slideShowData[currentSlideIndex])
    
  function nextSlide() {
    setDirection(1);
    setCurrentSlideIndex(wrap(0, slideShowData.length, currentSlideIndex + 1));
    
    setTimeout(() => {
      setCurrentSlide(slideShowData[currentSlideIndex])
    }, 1000)
  }

  function prevSlide() {
    setDirection(-1);
    setCurrentSlideIndex(wrap(0, slideShowData.length, currentSlideIndex - 1));
    
    setTimeout(() => {
      setCurrentSlide(slideShowData[currentSlideIndex])
    }, 1000)

  }


  return (
    <SlideShowContextProvider.Provider
      value={{
        prevSlide,
        nextSlide,
        currentSlide,
        direction,
        currentSlideIndex
      }}
    >
      {children}
    </SlideShowContextProvider.Provider>
  );
}

export default SlideShowContext;
