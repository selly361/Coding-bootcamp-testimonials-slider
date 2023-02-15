import React, { ReactNode, createContext, useState } from "react";

import { ISlideShowContext } from "types";
import slideShowData from "data/data.json";
import { wrap } from "framer-motion";

export const SlideShowContextProvider = createContext<ISlideShowContext>({
  currentSlide: slideShowData[0],
  direction: 1,
  nextSlide: () => {},
  prevSlide: () => {},
});

interface IProps {
  children: ReactNode;
}

function SlideShowContext({ children }: IProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    wrap(0, slideShowData.length, 0)
  );
  const [direction, setDirection] = useState(1);

  function nextSlide() {
    setDirection(1);
    setCurrentSlideIndex(wrap(0, slideShowData.length, currentSlideIndex + 1));
  }

  function prevSlide() {
    setDirection(-1);
    setCurrentSlideIndex(wrap(0, slideShowData.length, currentSlideIndex - 1));
  }

  const currentSlide = slideShowData[currentSlideIndex];

  return (
    <SlideShowContextProvider.Provider
      value={{
        prevSlide,
        nextSlide,
        currentSlide,
        direction,
      }}
    >
      {children}
    </SlideShowContextProvider.Provider>
  );
}

export default SlideShowContext;
