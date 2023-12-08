import styled from "styled-components";

export const ImageWrapper = styled.div`
  height: 268px;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;
`;

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  color: #121417;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const Make = styled.span`
  color: #3470ff;
`;
export const DescriptWrapper = styled.div`
  height: 40px;
  overflow: hidden;
`;

export const Description = styled.span`
  font-style: normal;

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
export const Descriptions = styled.p`
  margin-top: 4px;
`;
