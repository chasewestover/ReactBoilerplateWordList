import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Span = styled.span`
  float: right;
`;

const StyledNavLink = styled(NavLink)`
  margin-left: 3em;
  text-decoration: none;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Nav = styled.nav`
  padding: 1.5em 1.5em;
  background: #ff851b;
`;

function NavBar() {
  return (
    <Nav>
      <StyledLink to="/">Listr</StyledLink>
      <Span>
        <StyledNavLink to="/">Word List</StyledNavLink>
        <StyledNavLink to="/add">Add Word</StyledNavLink>
      </Span>
    </Nav>
  );
}
export default NavBar;
