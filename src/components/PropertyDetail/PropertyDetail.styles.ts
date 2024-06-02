import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { headerHeight } from "../../styles/constants";

export const DetailContainer = styled.div<{ $hasProperty: boolean }>`
  display: ${(props) => (props.$hasProperty ? `block` : `none`)};
  position: fixed;
  top: ${headerHeight};
  right: 0;
  z-index: 99;
  width: 100%;
  height: calc(100vh - ${headerHeight});
  background: white;

  @media ${device.sm} {
    width: 50%;
  }
`;
