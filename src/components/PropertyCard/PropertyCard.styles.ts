import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { seafoamGreen } from "../../styles/colors";

export const PropertyButton = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  margin-bottom: 1rem;
  border: ${({ $isSelected }) =>
    $isSelected ? `2px solid ${seafoamGreen}` : "none"};
  box-shadow: ${({ $isSelected }) =>
    $isSelected
      ? "2px 4px 8px rgba(0, 0, 0, 0.7)"
      : "2px 4px 8px rgba(0, 0, 0, 0.7)"};
  background: none;
  cursor: pointer;

  @media ${device.sm} {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;
