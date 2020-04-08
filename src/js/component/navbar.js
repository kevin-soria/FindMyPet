import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import { Context } from "../store/appContext";

// import { url } from "inspector";

export function Navibar() {
	const { store, actions } = useContext(Context);
	return (
		<Navbar bg="dark" variant="dark" sticky="top" className="mb-2">
			<Navbar.Brand className="ourfont2">
				<Link to="/"> Petfinder</Link>
			</Navbar.Brand>
			<Nav className="mr-auto">
				{/* <Link className="navhovering ourfont" to="/">
					Home
				</Link> */}
				<Link className="navhovering ourfont" to="/feed">
					Feed
				</Link>
				{store.contacts != null || store.contacts != undefined ? (
					<Link className="navhovering ourfont" to="/dashboard-b">
						Dashboard
					</Link>
				) : null}
				<Link className="navhovering ourfont" to="/blog">
					Blog
				</Link>
				<Button className="btn btn-warning p-2" variant="outline-light">
					<Link to="/alertMsg">Quick Alert</Link>
					<i className="fas fa-exclamation-circle" />
				</Button>
			</Nav>

			{/* <Form inline className="p-2 mr-1">
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-light">
					<i className="fas fa-search" />
				</Button>
			</Form> */}

			<NavDropdown
				variant="dark"
				bg="dark"
				alignRight
				className="wrapper p-2 mr-5"
				title={<i style={{ color: "white" }} className="far fa-user" />}
				drop="down">
				<NavDropdown.Item>
					<Link style={{ textDecoration: "none", color: "black" }} to="/signup">
						Signup up
					</Link>
				</NavDropdown.Item>
				{store.contacts != null || store.contacts != undefined ? (
					<NavDropdown.Item onClick={() => actions.logout()}>
						<Link style={{ textDecoration: "none", color: "black" }} to="/">
							Logout
						</Link>
					</NavDropdown.Item>
				) : (
					<NavDropdown.Item>
						<Link style={{ textDecoration: "none", color: "black" }} to="/login">
							Login
						</Link>
					</NavDropdown.Item>
				)}
			</NavDropdown>
		</Navbar>
	);
}
