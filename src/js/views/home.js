import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbo } from "./jumbo";
import { LandingCards } from "./landingCards";

let HomeStyles = {
	height: "200%"
};

export const Home = () => (
	<div className="text-center" styles={HomeStyles}>
		<h1 />
		<Jumbo />
		<LandingCards />
		{/* <p>
			<img src="https://images.ctfassets.net/cnu0m8re1exe/7sLmeD1tcL4UoIm0BjNaLh/22a9f42a4315361db96470f50b178e86/Dog-and-Cat.jpg?w=650&h=433&fit=fill" />
		</p> */}
	</div>
);
