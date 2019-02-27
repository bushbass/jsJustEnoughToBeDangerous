import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Header1 = styled.div`
font-family: 'Creepster', cursive;
  font-size: 3rem;
`
const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

export default function Header() {
  return (
    <nav>
      <Header1>
        <StyledLink to="/">Creature Collector</StyledLink>
      </Header1>
      <div>
        <StyledLink to="/add-creature">Add a new creature</StyledLink>
        <span> - </span>
        <StyledLink to="/show-creature">Show Creatures</StyledLink>
      </div>
    </nav>
  );
}
