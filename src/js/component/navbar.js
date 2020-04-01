import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";

// import { url } from "inspector";

export function Navibar() {
	return (
		<Navbar bg="dark" variant="dark" sticky="top" className="mb-2 ourfont">
			<Navbar.Brand href="/">Petfinder.io</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link className="navhovering" href="/">
					Home
				</Nav.Link>
				<Nav.Link className="navhovering" href="/feed">
					Feed
				</Nav.Link>
				<Nav.Link className="navhovering" href="/dashboard-b">
					Dashboard
				</Nav.Link>
			</Nav>

			<Form inline className="p-2 mr-1 ml-auto">
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-light">
					<i className="fas fa-search" />
				</Button>
			</Form>
			<Button href="/alertMsg" className=" p-2" variant="outline-light">
				Quick Alert <i className="fas fa-exclamation-circle" />
			</Button>
			<NavDropdown alignRight className="wrapper p-2" title={<i className="far fa-user" />} drop="down">
				<NavDropdown.Item href="/signup">Sing up</NavDropdown.Item>
				<NavDropdown.Item href="/login">Login to your account</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
			</NavDropdown>
		</Navbar>
	);
}
