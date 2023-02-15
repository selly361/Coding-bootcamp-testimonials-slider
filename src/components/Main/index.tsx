import { Article, UserImage } from "components";
import React, { useContext, useLayoutEffect } from "react";

import { AnimatePresence } from "framer-motion";
import { SlideShowContextProvider } from "context/SlideShowContext";
import { StyledMain } from "./Main.styles";
import { slideAnimation } from "global/animation";

function Main() {
  const { direction, currentSlide, currentSlideIndex, nextSlide } = useContext(
    SlideShowContextProvider
  );

  useLayoutEffect(() => {
    nextSlide();
  }, []);

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <StyledMain
        key={currentSlideIndex}
        custom={direction}
        variants={slideAnimation}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: .7,
          ease: "easeInOut",
        }}
      >
        <Article />
        <UserImage />
      </StyledMain>
    </AnimatePresence>
  );
}

export default Main;
