import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

let inputStyles = {
	border: "3px solid black",
	borderRadius: "5px",
	width: "150px",
	height: "150px"
	// boxShadow: " 0px 10px 30px -5px rgba(0, 0, 0, 0.3)",
	// boxSizing: "border-box",
	// backgroundSize: "60px 60px"
};
let ButtonStyles = {
	width: "150px",
	height: "150px"
};

export const DashboardB = props => {
	const [form, setForm] = useState(false);
	const [petIndex, setPetIndex] = useState();
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState("");
	const [message, setMessage] = useState();
	const [loading, setLoading] = useState(false);
	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "vuuhj7dc");
		console.log("imagestring", data);
		setLoading(true);
		const res = await fetch("https://api.cloudinary.com/v1_1/div5hqtbd/image/upload", {
			method: "POST",
			body: data
		});
		const file = await res.json();
		console.log("image", file.secure_url);
		setImage(file.secure_url);
		setLoading(false);
	};
	let currentUser = store.users.filter(user => user.id === store.contacts.id);
	console.log("currentUser", currentUser);
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					{currentUser.length > 0 ? (
						<Card style={{ width: "18rem" }}>
							<div style={inputStyles}>
								<input
									id="chooseBtn"
									style={ButtonStyles}
									type="file"
									name="file"
									// placeholder="Upload an image"
									onChange={uploadImage}
								/>
								{loading ? (
									<h3>Loading...</h3>
								) : (
									((
										<input
											id="chooseBtn"
											type="file"
											name="file"
											// placeholder="Upload an image"
											onChange={uploadImage}
										/>
									),
									(
										<img
											src={image}
											style={{
												width: "auto",
												position: "absolute",
												height: "50%",
												top: "0",
												left: "0"
											}}
										/>
									))
								)}
							</div>
							<Card.Img variant="top" />
							<Card.Body>
								<Card.Title>{currentUser[0].username}</Card.Title>
								<Card.Text>
									{currentUser[0].firstname} {currentUser[0].lastname}
								</Card.Text>
							</Card.Body>
							<ListGroup className="list-group-flush">
								<ListGroupItem>{currentUser[0].email}</ListGroupItem>
							</ListGroup>
							<Card.Body>
								<Link to="/petProfile">Pet Profile </Link>
								{/* <Button href="/petProfile">Pet Profile</Button> */}
							</Card.Body>
						</Card>
					) : null}
				</div>
				<div className="col-6">
					{currentUser.length > 0 ? (
						currentUser[0].pets.map((pet, index) => {
							console.log("pet-map", pet);
							return (
								<div key={index} className="card">
									<div>
										<img className="card-img-top" alt="Card image cap" />
										<div className="card-body">
											<h5 className="card-title">Animal : {pet.animal}</h5>
											<p className="card-text">{pet.description}</p>
											{form === false ? (
												<div
													className="btn btn-primary"
													onClick={() => {
														setForm(!form), setPetIndex(index);
													}}>
													Go somewhere
												</div>
											) : (
												index != petIndex && (
													<div
														className="btn btn-primary"
														onClick={() => {
															setForm(!form), setPetIndex(index);
														}}>
														Go somewhere
													</div>
												)
											)}
											{/* //needs to send info to allerts array */}
										</div>
										{form === true && index === petIndex ? (
											<div className="card-footer">
												<div className="form-group">
													<label htmlFor="exampleFormControlTextarea1">
														Example textarea
													</label>
													<textarea
														className="form-control"
														id="exampleFormControlTextarea1"
														rows="3"
														onChange={e => setMessage(e.target.value)}
													/>
												</div>
												<div
													className="btn btn-info"
													onClick={() =>
														actions.createAlert(
															message,
															currentUser[0].email,
															currentUser[0].firstname,
															pet.name,
															props.history,
															"currentUser[0].phone"
														)
													}>
													Send Alert
												</div>
												<div className="btn btn-info" onClick={() => setForm(!form)}>
													Close
												</div>
											</div>
										) : null}
									</div>
								</div>
							);
						})
					) : (
						<div>Loading</div>
					)}
				</div>
			</div>
		</div>
	);
};
DashboardB.propTypes = {
	history: PropTypes.object
};
