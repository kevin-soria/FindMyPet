import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

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
	width: "100%",
	fontColor: "black",
	textAlign: "right"
};

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export const LandingCards = () => {
	const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
	return (
		<Container>
			<Row>
				<Col>
					<div>
						<animated.div
							className="cardEffect"
							onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
							onMouseLeave={() => set({ xys: [0, 0, 1] })}
							style={{ transform: props.xys.interpolate(trans) }}
						/>
						{/* <Card className="slideCard">
							<Card.Img
								id="cardSlide"
								variant="top"
								src="https://image.freepik.com/free-photo/scottish-fold-cat-blue-surface_23-2148181678.jpg"
							/>
						</Card> */}
					</div>
				</Col>
				<Col>
					<div className="wrapperImg ">
						<div id="slide" className="w-100">
							<h3 style={{ textAlign: "right" }} className="headerStyle">
								Find Your Human
							</h3>
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

LandingCards.propTypes = {
	xys: PropTypes.func
};
