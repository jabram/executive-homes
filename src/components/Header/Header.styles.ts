import styled from "styled-components";
import { white } from "../../styles/colors";

export const HeaderElement = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  padding-block: 0.8rem;
  background: ${white};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
