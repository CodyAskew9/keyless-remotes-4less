import React from 'react';
import { Bars, Nav, NavIcon, NavLink } from './Navbar';

const Navbar = ({toggle}) => {
  return (<>
      <Nav>
          <NavLink to='/'>Keyless Remotes 4less</NavLink>
          <NavIcon onClick={toggle}>
            <p>Menu</p>
            <Bars />
          </NavIcon>
      </Nav>
  </>
  );
};
export default Navbar;


