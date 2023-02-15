import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledArticle = styled(motion.article)`
  width: 635px;
  height: 354px;
  background: url("images/pattern-quotes.svg") no-repeat contain/left top;
`;

export const BottomSection = styled.section`
  min-width: 265px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.h6`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 38px;
  color: #202047;
`;

export const Role = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 38px;
  color: #b9b9ce;
`;

export const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 44px;
  color: #202047;
`;
