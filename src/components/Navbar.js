// React Library
import React from 'react'

// Bootstrap Components
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function NavBar(){
	return (
		<Navbar bg="light" expand="lg">
		  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		    <Nav className="mr-auto">
		      <Nav.Link href="#home">Home</Nav.Link>
		      <Nav.Link href="#link">Link</Nav.Link>
		    </Nav>
		</Navbar>
	)
}
