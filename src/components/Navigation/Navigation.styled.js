import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  padding: 8px;
  margin: 0 auto;
`;
export const Header = styled.header`
  height: 90px;
  margin-bottom: 50px;
  border-radius: 14px;
  background: #f7f7fb;
`;

export const Navigate = styled.nav`
  display: flex;
  height: 100%;
  padding: 0 8px;
  align-items: center;
  justify-content: space-between;
`;
export const StyledLink = styled(Link)`
  display: block;

  width: 100px;
  stroke: rgba(18, 20, 23, 0.5);
`;
export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  width: 136px;

  padding: 12px;
  border-radius: 12px;
  color: white;
  background-color: rgba(18, 20, 23, 0.4);

  text-align: center;
  font-size: 20px;
  font-weight: 600;

  &.active {
    background-color: rgba(18, 20, 23, 0.6);
    transform: scale(0.9);
  }
  &:hover {
    color: #3470ff;
    background-color: rgba(18, 20, 23, 0.4);
  }
  &:not(:first-child) {
    margin-left: 8px;
  }
`;
