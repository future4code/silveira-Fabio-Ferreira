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
`;

export const ButtonPage = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  height: 1.5rem;
  width: 1.5rem;
  :active {
    background: none;
    font-weight: bold;
    border: none;
  }
`;
