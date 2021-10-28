import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ProjNavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #11dacd;
  }
`;
