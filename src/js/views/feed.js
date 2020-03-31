import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSpring, animated, useTransition } from "react-spring";

export const Feed = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);

	return (
		<div className="backgroundpic">
			{store.alerts.map((alert, index) => {
				return (
					<li key={index} className="list-group-item">
						<div className="row">
							<Card className="feedbox" style={{ width: "18rem" }}>
								<Card.Img
									variant="top"
									src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/missing-pet-lost-dog-cat-family-flyer-template-890095ffed1df13fbe001410e6ef2f2c_screen.jpg?ts=1561718514"
								/>
								<Card.Body>
									<Card.Title>LOST DOG :(</Card.Title>
									<Card.Text>Ive lost my dog, Please Help :(</Card.Text>
									<Button onClick={handleShow} variant="primary">
										Alert Me of a Lead
									</Button>
								</Card.Body>
								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton>
										<Modal.Title>Alert a Lead</Modal.Title>
									</Modal.Header>
									<Modal.Body>
										<Form>
											<Form.Group controlId="formBasicEmail">
												<Form.Label>Email address</Form.Label>
												<Form.Control type="email" placeholder="Enter email" />
												<Form.Text className="text-muted">
													Well never share your email with anyone else.
												</Form.Text>
											</Form.Group>
											<Form.Group controlId="formBasicInfo">
												<Form.Label>Pet Info</Form.Label>
												<Form.Control type="info" placeholder="Enter info" />
												<Form.Text className="text-muted" />
											</Form.Group>

											<Form.Group controlId="formBasicNumber">
												<Form.Label>Phone Number</Form.Label>
												<Form.Control type="phone" placeholder="Enter phone number" />
												<Form.Text className="text-muted" />
											</Form.Group>
											<Form.Group controlId="formBasicMessage">
												<Form.Label>Enter your message</Form.Label>
												<Form.Control type="message" placeholder="Enter message" />
												<Form.Text className="text-muted" />
											</Form.Group>
										</Form>
									</Modal.Body>
									<Modal.Footer>
										<Button variant="secondary" onClick={handleClose}>
											Close
										</Button>
										<Button variant="primary" onClick={handleClose}>
											Send Alert
										</Button>
									</Modal.Footer>
								</Modal>
								<Card.Footer>{alert.date}</Card.Footer>
							</Card>
						</div>
					</li>
				);
			})}
		</div>
	);
};
// <div className="row text-center cardrow">{mapAllAlerts}</div>
