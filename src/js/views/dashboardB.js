import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

let PawStyle = {
	fontSize: "80px"
};

export const DashboardB = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div className="container">
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://www.waspcom.com/wp-content/uploads/2014/10/user-placeholder-circle-1-300x300.png"
				/>
				<Card.Body>
					<Card.Title>Profile Name</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>Track my Pet</ListGroupItem>
				</ListGroup>
				<Card.Body>
					<Button onClick={handleShow}>Pet Profile</Button>
				</Card.Body>
			</Card>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Pet Profile</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="row">
						<i style={PawStyle} className="fas fa-paw col-6  pl-5 pt-3" />
						<Form className="col-6">
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Description</Form.Label>
								<Form.Control as="textarea" rows="3" />
							</Form.Group>
						</Form>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form method="post" action="#" id="#">
								<div className="form-group files color">
									<label>Upload Pet Photo </label>
									<input type="file" className="form-control" multiple="" />
								</div>
							</form>
						</div>
						<Form className="col-md-6">
							<Form.Group controlId="formGroupNickname">
								<Form.Label>Pet NickName</Form.Label>
								<Form.Control type="nickname" placeholder="Input Your Pets Nickname" />
							</Form.Group>
							<Form.Group controlId="formGroupGender">
								<Form.Label>Gender</Form.Label>
								<Form.Control type="gender" placeholder="Gender of your Pet" />
							</Form.Group>
						</Form>
					</div>
					<Form className="row">
						<Form.Group className="col" controlId="formGroupAnimal">
							<Form.Label>Animal</Form.Label>
							<Form.Control type="animal" placeholder="Type of animal?" />
						</Form.Group>
						<Form.Group className="col" controlId="formGroupBreed">
							<Form.Label>Breed</Form.Label>
							<Form.Control type="breed" placeholder="Input Breed" />
						</Form.Group>
					</Form>
					<Form className="row">
						<Form.Group className="col" controlId="formGroupEyecolor">
							<Form.Label>Eye color</Form.Label>
							<Form.Control type="animal" placeholder="Pets eye color?" />
						</Form.Group>
						<Form.Group className="col" controlId="formGroupFurcolor">
							<Form.Label>Fur Color</Form.Label>
							<Form.Control type="breed" placeholder="Pets fur color?" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
