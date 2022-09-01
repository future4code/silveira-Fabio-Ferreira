import styled from "styled-components";

export const MainCard = styled.div``;

export const MovieImage = styled.img`
  width: 18rem;
  padding: 30px;
  border-radius: 15px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 450px) {
    width: 11rem;
    height: 14rem;
    padding: 10px;
  }
`;

export const NameData = styled.div`
  font-family: Roboto;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  p:first-child {
    max-width: 17rem;
  }
  @media (max-width: 450px) {
    p:first-child {
      max-width: 11rem;
    }
  }
`;
