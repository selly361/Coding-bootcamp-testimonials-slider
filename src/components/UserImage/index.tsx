import { Container, PaginationButton, StyledImage } from "./UserImage.styles";
import { NextIcon, PrevIcon } from "assets";
import React, { useContext } from "react";

import { SlideShowContextProvider } from "context/SlideShowContext";

function UserImage() {
  const { prevSlide, nextSlide, currentSlide } = useContext(SlideShowContextProvider);

  return (
    <Container>
      <StyledImage src={currentSlide.image} />
      <PaginationButton>
        <PrevIcon onClick={prevSlide} />
        <NextIcon onClick={nextSlide} />
      </PaginationButton>
    </Container>
  );
}

export default UserImage;
