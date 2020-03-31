import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

let inputStyles = {
	borderStyle: "25px solid black",
	borderRadius: "5px",
	width: "150px",
	height: "150px",
	boxShadow: " 0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
	padding: "150px 0 0 0",
	boxSizing: "border-box",
	backgroundSize: "60px 60px"
};

export const DashboardB = () => {
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);
	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "vuuhj7dc");
		setLoading(true);
		const res = await fetch("https://api.cloudinary.com/v1_1/div5hqtbd/image/upload", {
			method: "POST",
			body: data
		});
		const file = await res.json();
		setImage(file.secure_url);
		setLoading(false);
	};

	return (
		<div className="container">
			<Card style={{ width: "18rem" }}>
				<div />
				<input
					style={inputStyles}
					type="file"
					name="file"
					// placeholder="Upload an image"
					onChange={uploadImage}
				/>
				{loading ? <h3>Loading...</h3> : <img src={image} style={{ width: "100px" }} />}
				<Card.Img variant="top" />
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
