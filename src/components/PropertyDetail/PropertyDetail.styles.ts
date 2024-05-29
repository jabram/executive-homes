import styled from "styled-components";

export const DetailContainer = styled.div<{ hasProperty: boolean }>`
  display: ${(props) => (props.hasProperty ? `block` : `none`)};
  width: 50%;
`;
