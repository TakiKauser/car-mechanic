import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Menubar.css';

const Menubar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand className='fw-bold'>
                        <img
                            alt=""
                            src="/logo.png"
                            width="30"
                            height="30"
                            className="align-top d-inline-block"
                        />{' '}
                        e-Car
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink to="/home" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Home</NavLink>
                            <NavLink to="/services" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Services</NavLink>
                            <NavLink to="/experts" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Experts</NavLink>
                            <NavLink to="/booking" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Booking</NavLink>
                            <NavLink to="/about" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">About</NavLink>
                            <NavLink to="/contact" activeStyle={{ color: 'yellow', fontWeight: 'bold' }} className="navlink">Contact</NavLink>
                        </Nav>
                        {/* <Nav>
                            {
                                user.email && <span className="user-name">{user.displayName} </span>
                            }
                            {
                                user.email ?
                                    <button onClick={logOut} className="menu-btn">Sign Out</button>
                                    :
                                    <Navbar.Text>
                                        <NavLink to="/login" className="login-menu-link">Log In</NavLink>
                                    </Navbar.Text>
                            }

                        </Nav> */}
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="#login">{user?.displayName} </a>
                        </Navbar.Text>
                        {
                            user?.email ?
                                <Button variant='light' onClick={logOut}>Sign Out</Button>
                                :
                                <Navbar.Text>
                                    <NavLink to="/login" className="login-menu-link">Log In</NavLink>
                                </Navbar.Text>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;