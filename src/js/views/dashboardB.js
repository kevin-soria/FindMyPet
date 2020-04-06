import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";

let imageStyles = {
	border: "2px solid grey",
	borderRadius: "180px",
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
				<div style={{ margitLeft: "10%", marginTop: "3%" }}>
					{currentUser.length > 0 ? (
						<div>
							<Card
								className="float-left mr-3 p-3"
								style={{
									width: "18rem",
									boxShadow: "0 2px 5px 0 rgba(0, 0, 0,0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
									backgroundColor: "#fff0f0e5",
									fontFamily: "Playfair Display, serif"
								}}>
								<div>
									{loading ? (
										<h3>Loading...</h3>
									) : (
										<img
											// src={image}
											style={{
												width: "100%",
												height: "auto",
												position: "absolute",
												height: "auto",
												top: "0",
												left: "0"
											}}
										/>
									)}
									{/* <input
									id="chooseBtn"
									style={ButtonStyles}
									type="file"
									name="file"
									// placeholder="Upload an image"
									onChange={uploadImage}
								/> */}
								</div>
								<Card.Title>{currentUser[0].username}</Card.Title>
								<Card.Img
									variant="top"
									src="https://image.freepik.com/free-vector/fashion-woman-style-pop-art_159379-102.jpg"
								/>
								<Card.Body className="mt-3">
									<Link to="/petProfile">Add New Pet </Link>

									{/* <Button href="/petProfile">Pet Profile</Button> */}
								</Card.Body>
							</Card>
							<Card className="ml-3 p-3" style={{ width: "50rem" }}>
								<div>
									<Card.Header>
										<h4>
											{currentUser[0].username}
											{"'"}s profile
										</h4>
									</Card.Header>
									<Card.Body>
										<p>First name: {currentUser[0].firstname}</p>
										<p>Last name: {currentUser[0].lastname}</p>
										<p>
											{currentUser[0].username}
											{"'"}s Address: {currentUser[0].address} ZIP: {currentUser[0].zipcode}
										</p>
										<p>email : {currentUser[0].email}</p>
									</Card.Body>
								</div>
							</Card>
						</div>
					) : null}
				</div>
			</div>

			<div>
				{currentUser.length > 0 ? (
					currentUser[0].pets.map((pet, index) => {
						console.log("pet-map", pet);
						return (
							<div className="row mt-2" key={index}>
								<div
									style={{
										width: "100%",
										boxShadow: "0 2px 5px 0 rgba(0, 0, 0,0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
										marginBottom: "2%",
										fontFamily: "Playfair Display, serif"
									}}>
									<img className="card-img-top float-left m-3" style={imageStyles} src={pet.image} />

									<div className="card-body">
										<h5 className="card-title">Animal : {pet.animal}</h5>
										<p className="card-text">{pet.age} years old</p>
										<p className="card-text">
											{" "}
											Me pets breed Is {pet.breed} and eye color is {pet.eyecolor} as well as fur
											is {pet.furcolor} color. Also gender is {pet.gender}
										</p>

										<p className="card-text">{pet.description}</p>

										<button
											type="button"
											className="btn btn-warning"
											onClick={() => actions.deletePet(pet.id, props.history)}>
											Remove pet
										</button>
										{form === false ? (
											<div
												className="btn btn-dark"
												style={{ boxShadow: "4px 4px grey" }}
												id="btnLogin"
												onClick={() => {
													setForm(!form), setPetIndex(index);
												}}>
												Alert as lost
											</div>
										) : (
											index != petIndex && (
												<div
													className="btn btn-dark"
													style={{ boxShadow: "4px 4px grey" }}
													id="btnLogin"
													onClick={() => {
														setForm(!form), setPetIndex(index);
													}}>
													Alert as lost
												</div>
											)
										)}
										{/* //needs to send info to allerts array */}
									</div>
									{form === true && index === petIndex ? (
										<div className="card-footer">
											<div className="form-group">
												<label htmlFor="exampleFormControlTextarea1">
													Please enter your message
												</label>
												<textarea
													className="form-control"
													id="exampleFormControlTextarea1"
													rows="3"
													onChange={e => setMessage(e.target.value)}
												/>
											</div>
											<div
												className="btn btn-dark"
												style={{ boxShadow: "4px 4px grey" }}
												id="btnLogin"
												onClick={() =>
													actions.createAlert(
														message,
														currentUser[0].email,
														currentUser[0].firstname,
														pet.name,
														"currentUser[0].phone",
														props.history
													)
												}>
												Send Alert
											</div>
											<div
												className="btn btn-dark"
												style={{ boxShadow: "4px 4px grey", marginLeft: "5%" }}
												id="btnLogin"
												onClick={() => setForm(!form)}>
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
	);
};
DashboardB.propTypes = {
	history: PropTypes.object
};
