import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel } from "react-bootstrap";

let JumboStyles = {
	borderStyle: "solid",
	borderWidth: "5px",
	width: "90%",
	marginLeft: "auto",
	marginRight: "auto"
};

let imageCar = {
	maxWidth: "60%",
	height: "60%",
	align: "center"
};

let Caption = {
	color: "black"
};

export const Jumbo = () => (
	<Carousel style={JumboStyles}>
		<Carousel.Item>
			<img
				style={imageCar}
				className="d-block w-100"
				src="https://image.freepik.com/free-photo/brown-cute-dog-sitting-white-background_23-2147840967.jpg"
				alt="First slide"
			/>
			<Carousel.Caption style={Caption}>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				style={imageCar}
				className="d-block w-100"
				src="https://image.freepik.com/free-photo/close-up-tabby-cat-looking-away-white-background_23-2147840900.jpg"
				alt="Third slide"
			/>

			<Carousel.Caption style={Caption}>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
				style={imageCar}
				className=" d-block w-100 "
				src="https://image.freepik.com/free-photo/stylish-obedient-dog-white-background_23-2147840951.jpg"
				alt="Third slide"
			/>

			<Carousel.Caption style={Caption}>
				<h3>Third slide label</h3>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
);
