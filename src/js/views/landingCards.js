import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
// import { url } from "inspector";

let CardStyles = {
	width: "25%",
	borderStyle: "solid",
	marginLeft: "5%",
	marginBottom: "2%",
	borderWidth: "2px"
};

let TextStyle = {
	float: "right",
	width: "40%",
	textAlign: "right"
};

export const LandingCards = () => {
	return (
		<Container>
			<CardGroup>
				<div style={CardStyles}>
					<Card className="slideCard">
						<Card.Img
							id="cardSlide"
							variant="top"
							src="https://image.freepik.com/free-photo/scottish-fold-cat-blue-surface_23-2148181678.jpg"
						/>
					</Card>
				</div>
				<div className="wrapperImg">
					<div id="slide" className="w-100">
						<h3>Find Your Human</h3>
						<p>
							{" "}
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
				</div>
			</CardGroup>
		</Container>
	);
};
