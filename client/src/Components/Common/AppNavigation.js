import React from 'react';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

const AppNavigation = () => {
    return (

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/"> Create</Nav.Link>
                        {/*<Nav.Link href="#UpdatePage">Update</Nav.Link>*/}
                       <Nav.Link as={Link} to="ViewPage"> View Selected</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

    );
};

export default AppNavigation;