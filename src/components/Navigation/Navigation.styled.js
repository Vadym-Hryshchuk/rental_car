import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  padding: 8px;
  margin: 0 auto;
`;
export const Header = styled.header`
  height: 90px;
  border-radius: 14px;
  background: #f7f7fb;
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 136px;

  padding: 14px;
  border-radius: 12px;
  background: #3470ff;

  color: white;
  text-align: center;
  font-size: 18px;

  &.active {
    color: #3470ff;
    background: white;
    border: 1px solid #3470ff;
  }
`;
