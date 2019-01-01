import React from 'react';
import { Navbar, NavItem } from "react-materialize";

const Nav = () => {
    return (
        <header>
            <Navbar id="main-nav" brand='NYT React' right>
                <NavItem href='/'>Home</NavItem>
                <NavItem href='/search'>Search</NavItem>
                <NavItem href='/saved'>View Saved</NavItem>
            </Navbar>
        </header>
    );
}

export default Nav;
