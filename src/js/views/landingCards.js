import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { url } from "inspector";

let CardStyles = {
	width: "70%",
	borderStyle: "solid",
	marginLeft: "-10%",
	marginBottom: "4%",
	borderWidth: "2px"
};

let TextStyle = {
	float: "right",
	width: "100%"
};

export const LandingCards = () => {
	return (
		<Container>
			<Row>
				<Col>
					<div style={CardStyles}>
						<Card className="slideCard">
							<Card.Img
								id="cardSlide"
								variant="top"
								src="https://image.freepik.com/free-photo/scottish-fold-cat-blue-surface_23-2148181678.jpg"
							/>
						</Card>
					</div>
				</Col>
				<Col>
					<div className="wrapperImg ">
						<div id="slide" className="w-100">
							<h3 className="headerStyle">Find Your Human</h3>
							<p style={TextStyle}>
								{" "}
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
								has been the industrys standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
