import styled from "styled-components";
import { device } from "../../styles/breakpoints";
import { seafoamGreen, white } from "../../styles/colors";

export const PropertyButton = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  aspect-ratio: 336 / 340;
  margin-bottom: 1rem;
  padding: 0;
  border: ${({ $isSelected }) =>
    $isSelected ? `2px solid ${seafoamGreen}` : "none"};
  border-radius: 8px;
  box-shadow: ${({ $isSelected }) =>
    $isSelected
      ? `2px 4px 8px rgba(0, 0, 0, 0.7)`
      : `2px 4px 8px rgba(0, 0, 0, 0.7)`};
  background: none;
  cursor: pointer;
  position: relative;

  @media ${device.sm} {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export const TitleImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

// TODO: come up with a better name once I know what this data means
export const TopStuff = styled.div`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  color: ${white};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;

  p {
    flex: 1;
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export const Details = styled.div`
  position: absolute;
  width: 100%;
  min-height: 50%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.4rem 1.6rem 1.6rem;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: rgba(0, 0, 0, 0.2);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%);
  color: ${white};
  text-align: left;

  p {
    margin: 0;
  }
`;
