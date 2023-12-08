import styled from "styled-components";

export const ImageWrapper = styled.div`
  width: 274px;
  height: 268px;
  outline: 1px solid red;
  margin-bottom: 14px;
`;

export const Descriptions = styled.span`
  /* display: inline-block; */
  text-align: center;
  padding: 0 6px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;
