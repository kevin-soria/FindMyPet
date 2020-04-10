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
	textAlign: "right",
	fontFamily: "Playfair Display, serif "
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
							<h3
								style={{ textAlign: "right", fontFamily: "Playfair Display, serif" }}
								className="headerStyle">
								Helping You Find Your Best Friend!
							</h3>
							<p style={TextStyle}>
								{" "}
								The latest figures shows that 80 million European households have a pet. As this figure
								grows, so too does their role in peoples lives. Pets provide companionship, affection
								and protection and unique bonds are formed with owners. They provide us with
								companionship but also with emotional support, reduce our stress levels, sense of
								loneliness and help us to increase our social activities and add to a childs self-esteem
								and positive emotional development.
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
