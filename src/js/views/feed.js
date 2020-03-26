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
	const { store, actions } = useContext(Context);
    // const [petname, setPetnamename] = useState(store.users.petname);
	// const [animal, setAnimal] = useState(store.users.animal);
	// const [breed, setBreed] = useState(store.users.breed);
	// const [bodymarks, setBodymarks] = useState(store.users.bodymarks);
	// const [eyecolor, setEyecolor] = useState(store.users.eyecolor);
	// const [weight, setWeight] = useState(store.users.weight);



    	// <Card.Img>src={alert.img}</Card.Img>
        //                 <Card.Text>Hi I am: {users.username}, and: {users.alert.message},
        //                 please help me find: {users.pets.name},a {users.pets.gender}{users.pets.animal}.</Card.Text>
		// 				<Button variant="primary">Alert Me of a Lead</Button>
		// 			</Card.Body>
		// 		</Card>
        //         <Card.Footer>{alert.date}</Card.Footer>
        
        
        return(

 
     <div>
     {alerts.map((users, index) => (
     
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
                        <Card.Text>Hi I am: {users.username}, and: {users.alert.message},
                        please help me find: {users.pets.name},a {users.pets.gender}{users.pets.animal}.</Card.Text>
						<Button variant="primary">Alert Me of a Lead</Button>
					</Card.Body>
				</Card>
                <Card.Footer>{alert.date}</Card.Footer>
    		</CardColumns>
            
        </div>)
        )} 
    </div>
    );
                        }                
                    // <div className="row text-center cardrow">{mapAllAlerts}</div>