import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
    border: ${(props) => props.theme.textColor};
  }
`;
