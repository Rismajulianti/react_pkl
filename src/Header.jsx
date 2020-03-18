import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,} from 'reactstrap';
  
  class Header extends React.Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state ={
          isOpen :false
      };
  }
  toggle() {
      this.setState({
          isOpen:!this.state.isOpen
      });
  }
  render() {
      return (
          <div>
              <Navbar color="faded" light expand="md">
                  <NavbarBrand href="/">PERSIJA</NavbarBrand>
                  <NavbarToggler onClick={this.toggle} />
                  <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav className="ml-auto" navbar>
                          <NavItem>
                              <NavLink href="/components">HOME</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="/components">NEWS</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink href="/components">TEAM</NavLink>
                          </NavItem>
                      </Nav>
                  </Collapse>
                  </Navbar>
          </div>
      )
  }
}   
  
  export default Header;