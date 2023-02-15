import { BottomSection, Description, Name, Role, StyledArticle } from './Article.styles';
import React, { useContext } from 'react'

import { SlideShowContextProvider } from 'context/SlideShowContext';

interface IProps {
    name: string;
    role: string;
    description: string;
}


function Article() {

    const { currentSlide } = useContext(SlideShowContextProvider)


  return (
    <StyledArticle>
        <Description>“ {currentSlide.description} ”</Description>
        <BottomSection>
            <Name>{currentSlide.name}</Name>
            <Role>{currentSlide.role}</Role>
        </BottomSection>
    </StyledArticle>
  )
}

export default Article