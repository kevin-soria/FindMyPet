import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styled, { keyframes } from "styled-components";
// import { url } from "inspector";
const keyFrame = keyframes`
  0%{
    height: 0%;
    
  }
  60%{
    height: 50%;
    
  }
  100% {
    height: 100%;
  }
`;
const Overlay = styled.div`
	position: absolute;
	bottom: 0;
	background: #008cba;
	width: 100%;
	height: 100%;
	color: black;
	animation: ${keyFrame} 2s ease;
	animation-iteration-count: inherit;
	opacity: ${props => props.opa};
`;
export const BottomCards = () => {
	const [opa, setOpa] = useState(0);
	return (
		<CardGroup>
			<Card style={{ position: "relative" }} onMouseOver={() => setOpa(0.7)} onMouseLeave={() => setOpa(0)}>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/lovely-pets-composition-with-sleepy-white-cat_23-2147997307.jpg"
				/>
				<Card.Footer />
				<Overlay opa={opa}>Ciao</Overlay>
			</Card>
			<Card style={{ position: "relative" }} onMouseOver={() => setOpa(0.7)} onMouseLeave={() => setOpa(0)}>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/cute-cat-with-sweater-hat_23-2148348114.jpg"
				/>
				<Card.Footer />
				<Overlay opa={opa}>Ciao</Overlay>
			</Card>
			<Card style={{ position: "relative" }} onMouseOver={() => setOpa(0.7)} onMouseLeave={() => setOpa(0)}>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/ginger-tabby-kitten-stands-its-hind-legs_107760-273.jpg"
				/>
				<Card.Footer />
				<Overlay opa={opa}>Ciao</Overlay>
			</Card>
		</CardGroup>
	);
};
