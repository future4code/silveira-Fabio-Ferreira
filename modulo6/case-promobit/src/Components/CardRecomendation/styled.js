import styled from "styled-components";

export const MainCard = styled.div`
  padding-left: 15px;
  @media (max-width: 450px) {
    padding-right: 10px;
    height: 40vh;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  border-radius: 6px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 450px) {
    height: 26vh;
    width: 42vw;
  }
`;

export const NameData = styled.div`
  font-family: Roboto;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
`;
