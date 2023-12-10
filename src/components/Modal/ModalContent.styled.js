import styled from 'styled-components';

export const ModalContentStyled = styled.div`
  position: relative;
  max-width: 541px;
  max-height: 752px;
  margin: 0;
  /* padding: 40px; */

  img {
    height: 248px;
    border-radius: 14px;
    margin-bottom: 14px;
    object-position: 30% 70%;
  }
`;
export const Title = styled.p`
  margin-bottom: 8px;

  color: #121417;

  font-size: 18px;
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
  margin-bottom: 14px;
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
export const Details = styled.p`
  margin-bottom: 24px;

  color: #121417;

  font-size: 14px;
  font-style: normal;
  line-height: 20px;
`;
export const Comfort = styled(Details)`
  margin-bottom: 8px;
  font-weight: 500;
`;
export const Rental = styled(Comfort)`
  margin-top: 24px;
`;
export const Conditions = styled.p`
  margin-bottom: 24px;
`;
export const Condition = styled.span`
  display: inline-block;
  padding: 7px 14px;
  color: #363535;
  border-radius: 35px;
  background-color: #f9f9f9;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:nth-child(2) {
    margin-right: 120px;
  }
  &:nth-child(-n + 2) {
    margin-bottom: 8px;
  }
`;
export const Value = styled.span`
  color: #3470ff;
  font-weight: 600;
`;
