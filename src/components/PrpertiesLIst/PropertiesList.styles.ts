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
