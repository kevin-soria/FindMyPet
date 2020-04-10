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
	marginBottom: "15%",
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
					<h1>PetFinders</h1>
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
