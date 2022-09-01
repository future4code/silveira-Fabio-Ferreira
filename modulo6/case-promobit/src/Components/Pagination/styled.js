import styled from "styled-components";

export const Pages = styled.ul`
  display: flex;
  list-style: none;
  padding-top: 3rem;
  padding-bottom: 2rem;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-right: 20px;
  @media (max-width: 450px) {
    width: 50vw;
    justify-content: center;
    align-items: center;
    margin-left: 10vh;
  }
`;

export const ButtonPage = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  height: 1.5rem;
  width: 1.5rem;
  @media (max-width: 450px) {
    margin-left: 4px;
    margin-right: 4px;
    height: 1rem;
    width: 1rem;
  }
`;

export const ButtonActive = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  height: 1.5rem;
  width: 1.5rem;
  background: none;
  font-weight: bold;
  border: none;
  @media (max-width: 450px) {
    margin-left: 4px;
    margin-right: 4px;
    height: 1rem;
    width: 1rem;
  }
`;
