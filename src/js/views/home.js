import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbo } from "./jumbo";
import { LandingCards } from "./landingCards";

// let HomeStyles = {
// 	marginBottom: "auto"
// };

export const Home = () => (
	<div className="text-center mb-5">
		<h1 />
		<Jumbo className="container mt-5" />
		<LandingCards className="container mb-5" />
		{/* <p>
			<img src="https://images.ctfassets.net/cnu0m8re1exe/7sLmeD1tcL4UoIm0BjNaLh/22a9f42a4315361db96470f50b178e86/Dog-and-Cat.jpg?w=650&h=433&fit=fill" />
		</p> */}
	</div>
);
