import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const ContactBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  min-width: 25%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  padding: 0 25px;
  opacity: ${({ contactOpen }) => (contactOpen ? "100%" : "0")};
  left: ${({ contactOpen }) => (contactOpen ? "0" : "-100%")};

  @media screen and (max-width: 768px) {
    min-width: 100%;
  }

  @media screen and (max-width: 480px) {
    min-width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const ContactBarWrapper = styled.form`
  color: #fff;
`;

export const ContactH1 = styled.h1`
  color: #fff;
  font-size: 32px;
  text-align: center;
  text-shadow: 1px 1px 5px #000000;
  margin: 20px 0;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ContactBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const ContactBarInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  background: 000000;
  margin: 5px 5px;

  &:hover {
    color: #11dacd;
    transition: 0.2s ease-in-out;
  }
`;

export const BigContactBarInput = styled.textarea`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  background: 000000;
  margin: 5px 5px;
  height: 10rem;

  &:hover {
    color: #11dacd;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
