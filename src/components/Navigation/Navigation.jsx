import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "icons/logo.svg";
import {
  Container,
  Header,
  Navigate,
  StyledLink,
  StyledNavLink,
} from "./Navigation.styled.js";

export const Navigation = () => {
  return (
    <Container>
      <Header>
        <Navigate>
          <StyledLink to="/">
            <Logo width="100%" height="100%" />
          </StyledLink>
          <div>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </div>
        </Navigate>
      </Header>
      <Outlet />
    </Container>
  );
};
