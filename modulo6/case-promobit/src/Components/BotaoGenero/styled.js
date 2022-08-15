import styled from "styled-components";

export const MainContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
`;

export const ButtonStyle = styled.button`
  font-family: Roboto;
  font-weight: bold;
  width: 8rem;
  height: 1.75rem;
  border-radius: 4px;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
