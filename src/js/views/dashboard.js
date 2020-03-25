import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export const Dashboard = props => {
	const { actions, store } = useContext(Context);
	// const [phone, setPhone] = useState(store.contacts.phone);
	const [username, setUsername] = useState(store.contacts.username);
	const [first_name, setFirst_name] = useState(store.contacts.first_name);
	const [last_name, setLast_name] = useState(store.contacts.last_name);
	const [address, setAddress] = useState(store.contacts.address);
	const [zipcode, setZipcode] = useState(store.contacts.zipcode);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Current contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							value={name}
							onChange={e => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							// value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							// value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							// value={address}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					{/* -------------------------------------button to view/edit pets---------------------------- */}
					<Link to={"/peteditor.js"}>
						<button
							typse="button"
							className="btn btn-primary form-control"
							onClick={() => actions.Dashboard(name, email, address, phone, props.match.params.meme)}>
							save Contact
						</button>
					</Link>
					<Link to={"/"}>
						<button
							typse="button"
							className="btn btn-primary form-control"
							onClick={() => actions.Dashboard(name, email, address, phone, props.match.params.meme)}>
							save Contact
						</button>
					</Link>
				</form>
			</div>
		</div>
	);
};

Dashboard.propTypes = {
	match: PropTypes.object
};
