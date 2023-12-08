import { Outlet } from "react-router-dom";
import { Container, Header, StyledNavLink } from "./Navigation.styled.js";

export const Navigation = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
