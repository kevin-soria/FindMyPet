import React from "react";
import { Link } from "react-router-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// import { url } from "inspector";

//create your first component
let NavStyles = {
	// color: "white",
	url: "https://www.starwars.com/",
	urlText: "text",
	backgroundColor: "black",
	margin: "20px",
	height: "100px",
	color: "white"
};

let IconStyles = {
	margin: "2px",
	height: "35px",
	width: "45px",
	color: "white",
	marginTop: "25px"
};

let listStyles = {
	margin: "5px",
	backgroundColor: "#33383b",
	color: "#ffffff",
	listStyle: "none",
	height: "40px",
	width: "70px",
	textAlign: "center",
	borderRadius: "10%",
	padding: "7%",
	marginTop: "12%"
};

export function Navbar() {
	return (
		<div className="row" style={NavStyles}>
			<div className="col-4">
				<a href="https://techcrunch.com/">
					<i className="fab fa-facebook-square" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-instagram" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-github-square" style={IconStyles}>
						{" "}
					</i>
				</a>
				<a href="https://techcrunch.com/">
					<i className="fab fa-twitter-square" style={IconStyles} />
				</a>
			</div>
			<div className="col col1" />
			<div className="col col2">
				<ul className="list-group list-group-horizontal">
					<Link to="/">
						{" "}
						<li className="list" style={listStyles}>
							Home
						</li>
					</Link>
					<Link to="/">
						<li className="list" style={listStyles}>
							Breed
						</li>
					</Link>
					<Link to="/login">
						<li className="list" style={listStyles}>
							Log In
						</li>
					</Link>
					<Link to="/signup">
						<li className="list" style={listStyles}>
							Sign Up
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
}
