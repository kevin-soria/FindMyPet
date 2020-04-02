import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useSpring, animated, useTransition, interpolate } from "react-spring";

let CardStyle = {
	width: "40%",
	height: "40%",
	borderStyle: "15px solid white",
	boxShadow: " 0px 10px 30px -5px #3e4244"
};

export const Feed = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const { store, actions } = useContext(Context);

	const props = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<div className="container">
			{store.alerts.map((alert, index) => {
				return (
					// <div key={index} className="d-inline-block w-25 fbox">
					// 	<Card
					// 		className="feedbox"
					// 		style={{
					// 			width: "16rem",
					// 			borderStyle: "15px solid white",
					// 			boxShadow: " 0px 10px 30px -5px #3e4244"
					// 		}}>
					// 		<Card.Img
					// 			variant="top"
					// 			src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/missing-pet-lost-dog-cat-family-flyer-template-890095ffed1df13fbe001410e6ef2f2c_screen.jpg?ts=1561718514"
					// 		/>
					// 		<Card.Body
					// 			style={{
					// 				hieght: "8rem"
					// 			}}>
					// 			<Card.Title>LOST DOG :(</Card.Title>
					// 			<Card.Text>
					// 				{alert.message}
					// 				{/* write conditional to render {alert.petname} if there is a pet name */}
					// 			</Card.Text>
					// 			<Card.Text>
					// 				Here is my contact info:
					// 				<ul>Name: {alert.name}</ul>
					// 				<ul>E-mail: {alert.email}</ul>
					// 				<ul>Phone: {alert.phone}</ul>
					// 			</Card.Text>
					// 			<Button onClick={handleShow} variant="primary">
					// 				Alert Me of a Lead
					// 			</Button>
					// 		</Card.Body>
					// 		<Modal show={show} onHide={handleClose}>
					// 			<Modal.Header closeButton>
					// 				<Modal.Title>Alert a Lead</Modal.Title>
					// 			</Modal.Header>
					// 			<Modal.Body>
					// 				<Form>
					// 					<Form.Group controlId="formBasicEmail">
					// 						<Form.Label>Email address</Form.Label>
					// 						<Form.Control type="email" placeholder="Enter email" />
					// 						<Form.Text className="text-muted">
					// 							Well never share your email with anyone else.
					// 						</Form.Text>
					// 					</Form.Group>
					// 					<Form.Group controlId="formBasicInfo">
					// 						<Form.Label>Pet Info</Form.Label>
					// 						<Form.Control type="info" placeholder="Enter info" />
					// 						<Form.Text className="text-muted" />
					// 					</Form.Group>

					// 					<Form.Group controlId="formBasicNumber">
					// 						<Form.Label>Phone Number</Form.Label>
					// 						<Form.Control type="phone" placeholder="Enter phone number" />
					// 						<Form.Text className="text-muted" />
					// 					</Form.Group>
					// 					<Form.Group controlId="formBasicMessage">
					// 						<Form.Label>Enter your message</Form.Label>
					// 						<Form.Control type="message" placeholder="Enter message" />
					// 						<Form.Text className="text-muted" />
					// 					</Form.Group>
					// 				</Form>
					// 			</Modal.Body>
					// 			<Modal.Footer>
					// 				<Button variant="secondary" onClick={handleClose}>
					// 					Close
					// 				</Button>
					// 				<Button variant="primary" onClick={handleClose}>
					// 					Send Alert
					// 				</Button>
					// 			</Modal.Footer>
					// 		</Modal>
					// 		<Card.Footer>{alert.date}</Card.Footer>
					// 	</Card>
					// </div>
					<div
						key={index}
						className="fbox d-inline-block ourfont2 col-3 m-3 container p-1"
						data-effect="zoom">
						<button className="fbox__save  js-save" type="button">
							<i className="fa  fa-bookmark" />
						</button>
						<figure className="fbox__image">
							<img
								src="https://www.muralswallpaper.com/app/uploads/Neutral-Bulldog-and-Sausage-Dog-Pattern-Pet-Wallpaper-Mural-Plain-820x532.jpg"
								alt="Short description"
							/>
						</figure>
						<div className="fbox__header">
							<figure className="fbox__profile">
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGEW0s-O3xZDwQ2S2CSgL4qDU_Yla1TMAzaYghrXHcJMk0xKY6&usqp=CAU"
									alt="Short description"
								/>
							</figure>
						</div>
						<div>
							<p className="fbox__body">{alert.message}</p>
							<div className="container fbox__bio ">
								<p>Here is my contact info:</p>
								<p>
									<ul>Name: {alert.name}</ul>
									<ul>E-mail: {alert.email}</ul>
									<ul>Phone: {alert.phone}</ul>
								</p>
							</div>
						</div>
						<div>
							<Button onClick={handleShow} variant="danger" className="alertbutton">
								Alert Me of a Lead
							</Button>

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
											/ <Form.Label>Enter your message</Form.Label>
											<Form.Control type="message" placeholder="Enter message" />
											<Form.Text className="text-muted" />
										</Form.Group>
									</Form>
								</Modal.Body>

								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose} />

									<Button variant="prim" onClick={handleClose} />
								</Modal.Footer>
							</Modal>
						</div>
						<div className="fbox__footer">
							<p className="fbox__date">Posted Date: {alert.date}</p>
							<p className />
						</div>
					</div>
				);
			})}
		</div>
	);
};
// <div className="row text-center cardrow">{mapAllAlerts}</div>
