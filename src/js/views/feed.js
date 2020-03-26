import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export const Feed = () => {
	// const { store, actions } = useContext(Context);
    const mapAllAlerts = alerts.map((alert, index) => (
	
    <div key={index} className="container justify-content-center">
			<CardColumns className="container justify-content-center col-lg-3 col-md-6 mb-4">
				<Card variant="top" style={{ width: "18rem" }}>
					<Card.Img
						variant="top"
						src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/missing-pet-lost-dog-cat-family-flyer-template-890095ffed1df13fbe001410e6ef2f2c_screen.jpg?ts=1561718514"
					/>
					<Card.Body>
						<Card.Title>LOST DOG :(</Card.Title>
						<Card.Img>src={alert.img}</Card.Img>
                        <Card.Text>{user.username}:{alert.message}</Card.Text>
						<Button variant="primary">Alert Me of a Lead</Button>
					</Card.Body>
				</Card>
                <Card.Footer>{alert.date}</Card.Footer>
    		</CardColumns>
        </div>));
        
        return(
         <div className="row text-center cardrow">{mapAllAlerts}</div>
         )
};
