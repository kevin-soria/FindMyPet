import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<div>
			<footer className="footer-distributed">
				<div className="footer-left ">
					<h3>
						Pet
						<span>Finders</span>
					</h3>
					<p className="footer-links">
						<Link to="/">Home</Link> · <a href="#">Blog</a> ·<a href="#">Lost</a> · <a href="#">Pet News</a>
					</p>
					<p className="footer-company-name">May the Force be with you</p>
					<div className="footer-icons">
						<a href="#">
							<i className="fab fa-facebook-f" />
						</a>
						<a href="#">
							<i className="fab fa-twitter" />
						</a>
						<a href="#">
							<i className="fab fa-instagram" />
						</a>
						<a href="#">
							<i className="fab fa-github" />
						</a>
					</div>
				</div>
				<div className="footer-right">
					<p>Contact Us</p>
					<form action="#" method="post">
						<input type="text" name="email" placeholder="Email" />
						<textarea name="message" placeholder="Message" defaultValue={""} />
						<button>Send</button>
					</form>
				</div>
			</footer>
		</div>
	);
}
