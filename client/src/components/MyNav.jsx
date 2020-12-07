import React, { useState } from 'react';


const MyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className = "nav-top" color="primary" light expand="sm">
        <NavbarBrand href="#home">
          <img
            src="images/logo192.png"
            width="30"
            height="30"
            alt="React"
          />
        </NavbarBrand>
        <NavbarBrand href="/">My Site</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/notes">Notes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/create_note">Create Note</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;