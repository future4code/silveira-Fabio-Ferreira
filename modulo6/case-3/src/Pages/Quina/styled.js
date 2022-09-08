import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
export const LeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100vw;
  height: 100%;
  background: #6befa3;
  background: radial-gradient(
    circle at right,
    rgba(211, 211, 211) 68%,
    rgba(211, 211, 211) 2%,
    rgba(134, 102, 239) 0%,
    rgba(134, 102, 239) 20%
  );
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
      circle at bottom,
      rgba(211, 211, 211) 50%,
      rgba(211, 211, 211) 25%,
      rgba(134, 102, 239) 0%,
      rgba(134, 102, 239) 60%
    );
  }
`;

export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100%;
  background: lightgrey;
`;

export const SelectConcourse = styled.select``;

export const Numbers = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 37rem;
  @media (max-width: 420px) {
    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 0 0 8rem 2.5rem;
  }
`;

export const SortNumbers = styled.p`
  padding-left: 26px;
  width: 5rem;
  height: 5rem;
  background-color: green;
  background: #ffffff;
  border-radius: 50%;
  margin-right: 1rem;
  font-size: 1.5rem;
  font-family: Roboto;
  font-weight: bold;
  padding-top: 24px;
  @media (max-width: 420px) {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
    font-size: 1rem;
    font-family: Roboto;
    font-weight: bold;
    padding: 15px 0 0 15px;
  }
`;

export const ModalSelect = styled.div`
  padding-left: 15px;
`;

export const Form = styled.form`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Clover = styled.div`
  background: white;
  position: relative;
  height: 21px;
  width: 21px;
  ::after {
    background: inherit;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    height: 21px;
    width: 21px;
  }

  ::before {
    background: inherit;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0;
    right: -50%;
    height: 21px;
    width: 21px;
  }
  @media (max-width: 420px) {
    height: 17px;
    width: 17px;
    ::after {
      height: 17px;
      width: 17px;
    }
    ::before {
      height: 17px;
      width: 17px;
    }
  }
`;

export const Clover1 = styled.div`
  background: white;
  position: relative;
  height: 21px;
  width: 21px;
  padding-right: 5px;
  transform: rotate(-90deg) scale(1);
  ::after {
    background: inherit;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    height: 21px;
    width: 21px;
  }

  ::before {
    background: inherit;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0;
    right: -50%;
    height: 21px;
    width: 21px;
  }
  @media (max-width: 420px) {
    height: 17px;
    width: 17px;
    ::after {
      height: 17px;
      width: 17px;
    }
    ::before {
      height: 17px;
      width: 17px;
    }
  }
`;

export const Clover2 = styled.div`
  background: white;
  position: relative;
  height: 21px;
  width: 21px;
  transform: rotate(90deg) scale(1);
  ::after {
    background: inherit;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    height: 21px;
    width: 21px;
  }

  ::before {
    background: inherit;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0;
    right: -50%;
    height: 21px;
    width: 21px;
  }
  @media (max-width: 420px) {
    height: 17px;
    width: 17px;
    ::after {
      height: 17px;
      width: 17px;
    }
    ::before {
      height: 17px;
      width: 17px;
    }
  }
`;

export const Clover3 = styled.div`
  background: white;
  position: relative;
  height: 21px;
  width: 21px;
  transform: rotate(180deg) scale(1);
  ::after {
    background: inherit;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    height: 21px;
    width: 21px;
  }

  ::before {
    background: inherit;
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 0;
    right: -50%;
    height: 21px;
    width: 21px;
  }
  @media (max-width: 420px) {
    height: 17px;
    width: 17px;
    ::after {
      height: 17px;
      width: 17px;
    }
    ::before {
      height: 17px;
      width: 17px;
    }
  }
`;

export const Logo = styled.div``;

export const Text = styled.p`
  color: white;
  font-family: Roboto;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 7px 0 0 0;
  text-decoration: underline white;
`;

export const Select = styled.select`
  margin: 0 0 50px 0;
  width: 10rem;
  height: 2rem;
  border-radius: 6px;
  border: none;
  @media (max-width: 420px) {
    margin: 0 0 5rem 0;
    width: 12rem;
    height: 2.5rem;
  }
`;

export const DivClover1 = styled.div`
  display: flex;
  max-width: 25px;
  justify-content: space-around;
  padding: 0 0 2px 0;
  div:first-child {
    margin-left: 2px;
  }
`;

export const DivClover2 = styled.div`
  display: flex;
  max-width: 25px;
  justify-content: space-between;
  div:first-child {
    margin-left: 2px;
  }
`;

export const DivClover3 = styled.div`
  display: flex;
  max-width: 25px;
  justify-content: space-between;
  div:first-child {
    margin-left: 2px;
  }
`;

export const DivClover4 = styled.div`
  display: flex;
  max-width: 25px;
  justify-content: space-between;
  div:first-child {
    margin-left: 2px;
  }
`;

export const Separador = styled.div`
  display: flex;
`;
export const Separador2 = styled.div`
  display: flex;
`;

export const LogoeNome = styled.div`
  display: flex;
  width: 18rem;
  justify-content: space-around;
  padding-left: 50px;
  margin: 15rem 4.5rem 20rem 5rem;
  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem 0 0;
  }
`;

export const Adendo = styled.p`
  font-family: Roboto;
  font-weight: bold;
  font-size: normal;
  margin: 17rem 0 0 35rem;
  @media (max-width: 420px) {
    margin: 0;
    text-align: center;
  }
`;

export const NumeroseAdendo = styled.div`
  margin: 17rem 0 0 0;
  @media (max-width: 420px) {
    margin: 1rem;
  }
`;

export const Concurso = styled.div`
  p:first-child {
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    color: white;
  }
  @media (max-width: 420px) {
    margin: 5rem;
    display: flex;
    flex-direction: row;
  }
`;

export const IdEData = styled.p`
  p:nth-child(1) {
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
  }
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  @media (max-width: 420px) {
    p:nth-child(2) {
      display: none;
    }
  }
`;
