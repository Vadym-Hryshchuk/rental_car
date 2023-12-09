import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleGreet = styled.h1`
  font-size: 52px;
  line-height: 78px;
  text-align: center;
  text-transform: uppercase;
  text-decoration-line: overline;
  text-decoration-style: solid;
`;

export const Img = styled.img`
  border-radius: 12px;
  margin-bottom: 8px;
`;
export const Appeal = styled(Link)`
  display: block;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  text-align: center;
  &:hover {
    color: rgba(18, 20, 23, 0.8);
  }
`;
