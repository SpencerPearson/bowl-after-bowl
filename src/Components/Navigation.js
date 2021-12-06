import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
    return (
        <Navbar variant='dark' expand="md" bg="dark" className="p-2">
            <Navbar.Brand href="/">Bowl After Bowl</Navbar.Brand>
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
