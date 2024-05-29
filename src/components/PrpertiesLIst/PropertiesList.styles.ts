import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;

  @media ${device.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;
  }
`;

export const PropertyButton = styled.button`
  width: 100%;
  margin-bottom: 1rem;
  padding: 2rem; // temp
  background: none;
  cursor: pointer;

  @media ${device.sm} {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;
