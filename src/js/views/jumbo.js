import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, Container } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";
import { Spring, config } from "react-spring/renderprops";

let JumboStyles = {
	borderStyle: "15px solid white",
	// borderWidth: "5px",
	width: "90%",
	height: "70vh",
	marginLeft: "auto",
	marginRight: "auto",
	marginBottom: "5%",
	borderRadius: "5px",
	boxShadow: " 0px 10px 30px -5px #3e4244",
	fontStyle: "'Acme', sans-serif",
	justifyContent: "right",
	alignContent: "right"
};

let TextStyle = {
	float: "left",
	width: "120%",
	fontColor: "black",
	justifyContent: "left",
	alignContent: "left",
	padding: "10%",
	bottom: "10%"
};
let imageCar = {
	align: "center",
	height: "500px"
};

let Caption = {
	color: "black",
	fontSize: "15px"
};

export const Jumbo = () => (
	<div>
		<Carousel style={JumboStyles} className="ourfont">
			<Carousel.Item>
				<img
					style={imageCar}
					className="d-block w-100"
					src="https://www.smartertravel.com/uploads/2017/09/Cover_Pet-Friendly-Pets-2-1-1400x500.jpg"
					alt="First slide"
				/>
				<Carousel.Caption style={Caption}>
					<h3>PetFinders</h3>
					<p>An a interactive user platform to aid in reconnecting owners back with their furry friends</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={imageCar}
					className="d-block w-100"
					src="https://i0.wp.com/katzenworld.co.uk/wp-content/uploads/2019/12/getting-to-know-your-cat.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption style={Caption}>
					<h3>Connect</h3>
					<p>Connect with users who are finding their furry friends!</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={imageCar}
					className=" d-block w-100 "
					src="https://animalhaven.org/wp-content/uploads/2020/03/DeeDee-banner-08157-760x326.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption style={Caption}>
					<h3>Alerts!</h3>
					<p>Immediately Alerts between users!</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</div>
);

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 80}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 25}px,${y / 6 - 80}px,0)`;
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;

// export const Jumbo = () => {
// 	const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 240 } }));

// 	return (
// 		<>
// 			<div className="jumbotron jumbotron-fluid jbbkimg" style={JumboStyles}>
// 				<div className="container1 col-8" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
// 					<animated.div className="card1" />
// 					<animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
// 					<animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
// 					<animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
// 				</div>
// 				<div id="slide" style={TextStyle} className="container1 col-7 ">
// 					<h3 className="headerStyle">PetFinders</h3>
// 					<p style={TextStyle}>
// 						{" "}
// 						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
// 						the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
// 						type and scrambled it to make a type specimen book.
// 					</p>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// {/ Jumbo.propTypes = {
// 	xy: PropTypes.object
// };
