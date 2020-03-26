import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import { url } from "inspector";

let CardStyles = {
	width: "50%"
};

let TextStyle = {
	float: "right",
	width: "50%"
};

export const LandingCards = () => {
	return (
		<CardGroup className="slideRight">
			<div>
				<Card style={CardStyles}>
					<Card.Img
						variant="top"
						src="https://image.freepik.com/free-photo/scottish-fold-cat-blue-surface_23-2148181678.jpg"
					/>

					<Card.Footer />
				</Card>
			</div>
			<div className="wrapperImg" style={TextStyle}>
				<div id="slide">
					<h3>Find Your Human</h3>
					<p>
						{" "}
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
						the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book.
					</p>
				</div>
			</div>
		</CardGroup>
	);
};
