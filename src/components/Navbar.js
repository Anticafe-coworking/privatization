import React from 'react';
import { Navbar, Nav } from "react-bootstrap"

const NavBar = () => {
    return (
        <Navbar variant="light" expand="md" style={{ padding: "20px 35px", backgroundColor: "white" }}>
            <Navbar.Brand href="#home" style={{ marginRight: "1.5rem" }}>
                <img
                    src="https://www.anticafe.eu/wp-content/uploads/2019/11/Logo_2019-1.png"
                    // width="30"
                    height="25"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="item-navbar"><div className="green-btn">Réserver une table</div></Nav.Link>
                    <Nav.Link href="#features" className="item-navbar"><div className="green-btn">Réserver une salle</div></Nav.Link>
                    <Nav.Link href="#pricing" className="item-navbar"><div className="active-btn-navbar">Privatiser un espace</div></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
