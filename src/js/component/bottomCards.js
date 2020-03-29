import React, { useRef, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import { url } from "inspector";
function useHover() {
	const [value, setValue] = useState(false);

	const ref = useRef(null);

	const handleMouseOver = () => setValue(true);
	const handleMouseOut = () => setValue(false);

	useEffect(
		() => {
			const node = ref.current;
			if (node) {
				node.addEventListener("mouseover", handleMouseOver);
				node.addEventListener("mouseout", handleMouseOut);

				return () => {
					node.removeEventListener("mouseover", handleMouseOver);
					node.removeEventListener("mouseout", handleMouseOut);
				};
			}
		},
		[ref.current] // Recall only if ref changes
	);

	return [ref, value];
}
let OverlayStyle = {
	position: "absolute",
	bottom: "0",
	left: "0",
	right: "0",
	backgroundColor: "#008CBA",
	overflow: "hidden",
	width: "100%",
	height: "0",
	transition: "1s"
};
let NoStyle = {};

export const BottomCards = () => {
	const [hoverRef, isHovered] = useHover();

	return (
		<CardGroup>
			<Card ref={hoverRef} variant="top">
				<Card.Img
					style={isHovered ? { OverlayStyle } : { NoStyle }}
					variant="top"
					src="https://image.freepik.com/free-photo/lovely-pets-composition-with-sleepy-white-cat_23-2147997307.jpg"
				/>
			</Card>
			<Card>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/cute-cat-with-sweater-hat_23-2148348114.jpg"
				/>
			</Card>
			<Card>
				<Card.Img
					variant="top"
					src="https://image.freepik.com/free-photo/ginger-tabby-kitten-stands-its-hind-legs_107760-273.jpg"
				/>
			</Card>
		</CardGroup>
	);
};
