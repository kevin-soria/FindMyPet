import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

export const DashboardB = () => {
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
					<Button href="/petProfile">Pet Profile</Button>
				</Card.Body>
			</Card>
		</div>
	);
};
