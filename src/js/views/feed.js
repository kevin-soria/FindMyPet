import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Feed = () => {
	// const { store, actions } = useContext(Context);
	return (
		<div>
			<Card style={{ width: "18rem" }}>
				<Card.Img
					variant="top"
					src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/missing-pet-lost-dog-cat-family-flyer-template-890095ffed1df13fbe001410e6ef2f2c_screen.jpg?ts=1561718514"
				/>
				<Card.Body>
					<Card.Title>LOST DOG :(</Card.Title>
					<Card.Text>Ive lost my dog, Please Help :(</Card.Text>
					<Button variant="primary">Alert Me of a Lead</Button>
				</Card.Body>
			</Card>
		</div>
	);
};
