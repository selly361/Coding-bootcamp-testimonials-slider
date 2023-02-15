import styled from "styled-components";

export const Container = styled.div`
  max-width: 540px;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 400px;
  height: 400px;
`;

export const PaginationButton = styled.button`
  position: absolute;
  max-width: 112px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 15px 20px -10px rgba(36, 36, 113, 0.0991313);
  border-radius: 28px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 48px;
  bottom: -28px;
  border: unset;

  button {
    cursor: pointer;
    width: 50px;
    height: 56px;
    display: grid;
    place-items: center;
  }
`;
