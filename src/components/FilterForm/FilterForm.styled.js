import Creatable from 'react-select/creatable';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 859px;

  margin: 0 auto;
`;

export const StyledSelect = styled(Creatable)`
  width: ${prop => prop.width};
  height: 48px;
  margin-right: 18px;
`;

export const Fieldset = styled.fieldset`
  margin: 0 18px 0 0;
  padding: 0;
  border: none;
  display: flex;

  span {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const CustomInputLeft = styled.input`
  height: 48px;
  width: 136px;
  padding: 0 0 0 24px;

  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  border: 1px solid #ccc;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  &::placeholder {
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
  background: #f7f7fb;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: #2684ff;
    box-shadow: 0 0 0 1px #2684ff;
  }
`;
export const CustomInputRight = styled(CustomInputLeft)`
  border-radius: 0px 14px 14px 0px;
`;
