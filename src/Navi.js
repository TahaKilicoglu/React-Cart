import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  NavItem,
  Nav,
  NavLink,
  NavbarBrand,
  Collapse,
} from "reactstrap";
import CartSummary from "./CartSummary";
import { Link } from "react-router-dom";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-expand-sm bg-warning">
          <NavbarBrand href="/">
            {" "}
            <span style={{ color: "black" }}>Nortwind App</span>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <NavItem>
                <NavLink>
                  <Link to="/form1" style={{ textDecoration: 'none' }}>
                    <span style={{ color: "black" }}>Form Demo 1</span>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/form2" style={{ textDecoration: 'none' }}>
                    <span style={{ color: "black" }}>Form Demo 2</span>
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  <span style={{ color: "black" }}>GitHub</span>
                </NavLink>
              </NavItem>
              <CartSummary
                removeFromCart={this.props.removeFromCart}
                cart={this.props.cart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
