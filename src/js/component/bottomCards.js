import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import { url } from "inspector";

export const BottomCards = () => {
	return (
		<CardGroup>
			<Card>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/lovely-pets-composition-with-sleepy-white-cat_23-2147997307.jpg"
				/>

				<Card.Footer />
			</Card>
			<Card>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/cute-cat-with-sweater-hat_23-2148348114.jpg"
				/>

				<Card.Footer />
			</Card>
			<Card>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/ginger-tabby-kitten-stands-its-hind-legs_107760-273.jpg"
				/>

				<Card.Footer />
			</Card>
		</CardGroup>
	);
};
