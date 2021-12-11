import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../images/BABLipsThumb.png'

export default function Navigation() {
    return (
        <Navbar variant='dark' sticky='top' expand="md" bg="info" className="p-2">
            <Navbar.Brand className="text-success" href="/">Bowl After Bowl
            <img src={logo} alt="Lips blowing smoke logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav className="mr-auto">
                        <Nav.Link href="/episodes">Episodes</Nav.Link>
                        <Nav.Link href="/v4v">Value 4 Value</Nav.Link>
                        <Nav.Link href="/itb">In The Bowl</Nav.Link>
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
