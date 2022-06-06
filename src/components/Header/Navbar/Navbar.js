import React, {Component} from "react";
import PropTypes from 'prop-types';
import { ListItem, Nav, NavList, StyledNavLink } from "./Navbar.styled";

class Navbar extends Component {
    renderNavbarList = () => {
        return this.props.tabList.map(({name}, idx) => (
            <ListItem key={idx}>
                <StyledNavLink
                    to={`/${name}`}
                >
                    {name}
                </StyledNavLink>
            </ListItem>
        ));
    }
    render() {
        return (
            <Nav>
                <NavList>
                    {this.renderNavbarList()}
                </NavList>
            </Nav>
        )
    }
}

Navbar.propTypes = {
    tabList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default Navbar;