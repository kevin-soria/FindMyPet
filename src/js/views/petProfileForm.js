import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

let PawStyle = {
	fontSize: "70px"
};

let FormStyles = {
	// height: "80%",
	boxShadow: " 0px 10px 30px -5px grey",
	width: "50%",
	float: "left",
	marginRight: "2%",
	marginLeft: "2%",
	marginBottom: "2%",
	marginTop: "2%",
	fontFamily: "Playfair Display, serif"
};

let ImgStiles = {
	width: "40%",
	float: "right",
	backgroundRepeat: "no-repeat",
	marginRight: "2%",
	marginTop: "2%",
	marginBottom: "2%"
};

// let InputStyles = {
// 	borderStyle: "2px solid white",
// 	marginLeft: "4%",
// 	width: "80%"
// };
export const PetProfile = props => {
	const { store, actions } = useContext(Context);
	const [image, setImage] = useState("");
	const [loading, setLoading] = useState(false);
	const [allinObject, setAllinObject] = useState({
		name: "",
		description: "",
		breed: "",
		age: "",
		eyecolor: "",
		furcolor: "",
		animal: "",
		gender: "",
		image: "",
		person_id: store.contacts.id
	});
	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "vuuhj7dc");
		setLoading(true);
		const res = await fetch("https://api.cloudinary.com/v1_1/div5hqtbd/image/upload", {
			method: "POST",
			body: data
		});
		const file = await res.json();
		setImage(file.secure_url);
		setAllinObject({ ...allinObject, image: file.secure_url });

		setLoading(false);
	};
	console.log("image", image);
	return (
		<div>
			<div>
				<img
					src="https://image.freepik.com/free-photo/front-view-cute-dog-with-head-raised_23-2148326219.jpg"
					style={ImgStiles}
				/>
			</div>

			<div style={FormStyles}>
				<h2
					style={{
						marginLeft: "4%",
						marginTop: "8%"
					}}>
					CREATE PET ACCOUNT
				</h2>
				<div className="text-center mt-5">
					<div className="row">
						<div className="col-md-6">
							<form method="post" action="#" id="#">
								<div className="form-group files color">
									<p className="float">Pet Photo</p>
									<label
										style={{
											padding: "6px 6px",
											background: "white",
											boxShadow: "4px 4px 4px 2px grey",
											width: "50%",
											height: "150px"
										}}>
										<input
											type="file"
											name="file"
											style={{ display: "none", overflow: "hidden" }}
											// placeholder="Upload an image"
											onChange={uploadImage}
										/>
										{loading ? (
											<h3>Loading...</h3>
										) : (
											<img
												src={image}
												style={{
													width: "100px",
													height: "100%"
												}}
											/>
										)}
									</label>{" "}
								</div>
							</form>
						</div>
						<Form className="col-6">
							<Form.Group
								style={{ marginRight: "8%", float: "right", width: "95%" }}
								controlId="exampleForm.ControlTextarea1">
								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									rows="6"
									onChange={e => setAllinObject({ ...allinObject, description: e.target.value })}
									value={allinObject.description}
								/>
							</Form.Group>
						</Form>

						{/* <i style={PawStyle} className="fas fa-paw col-6  pl-5 pt-3" /> */}
					</div>
					<Form style={{ marginRight: "4%", width: "20%", float: "right" }}>
						<Form.Group controlId="formGroupAnimal">
							<Form.Label>Age</Form.Label>
							<Form.Control
								type="age"
								placeholder="Age of animal?"
								onChange={e => setAllinObject({ ...allinObject, age: e.target.value })}
								value={allinObject.age}
							/>
						</Form.Group>
					</Form>
					<div className="row">
						<Form className="col-md-6">
							<Form.Group style={{ marginLeft: "6%", width: "130%" }} controlId="formGroupNickname">
								<Form.Label>NickName</Form.Label>
								<Form.Control
									type="nickname"
									placeholder="Pets Nickname"
									onChange={e => setAllinObject({ ...allinObject, name: e.target.value })}
									value={allinObject.name}
								/>
							</Form.Group>
						</Form>
						<Form className="col-md-6">
							<Form.Group
								style={{ float: "right", marginRight: "2%", width: "66%" }}
								controlId="formGroupGender">
								<Form.Label>Gender</Form.Label>
								<Form.Control
									type="gender"
									placeholder="Gender of your Pet"
									onChange={e => setAllinObject({ ...allinObject, gender: e.target.value })}
									value={allinObject.gender}
								/>
							</Form.Group>
						</Form>
					</div>
					<Form className="row">
						<Form.Group
							style={{ marginLeft: "4%", marginRight: "-2%", width: "50%" }}
							className="col"
							controlId="formGroupAnimal">
							<Form.Label>Animal</Form.Label>
							<Form.Control
								type="animal"
								placeholder="Type of animal?"
								onChange={e => setAllinObject({ ...allinObject, animal: e.target.value })}
								value={allinObject.animal}
							/>
						</Form.Group>
						<Form.Group style={{ marginRight: "4%" }} className="col" controlId="formGroupBreed">
							<Form.Label>Breed</Form.Label>
							<Form.Control
								type="breed"
								placeholder="Input Breed"
								onChange={e => setAllinObject({ ...allinObject, breed: e.target.value })}
								value={allinObject.breed}
							/>
						</Form.Group>
					</Form>
					<Form className="row">
						<Form.Group
							style={{ marginLeft: "4%", marginRight: "-2%" }}
							className="col"
							controlId="formGroupEyecolor">
							<Form.Label>Eye color</Form.Label>
							<Form.Control
								type="animal"
								placeholder="Pets eye color?"
								onChange={e => setAllinObject({ ...allinObject, eyecolor: e.target.value })}
								value={allinObject.eyecolor}
							/>
						</Form.Group>
						<Form.Group style={{ marginRight: "4%" }} className="col" controlId="formGroupFurcolor">
							<Form.Label>Fur Color</Form.Label>
							<Form.Control
								type="breed"
								placeholder="Pets fur color?"
								onChange={e => setAllinObject({ ...allinObject, furcolor: e.target.value })}
								value={allinObject.furcolor}
							/>
						</Form.Group>
					</Form>
					<Button
						style={{
							marginBottom: "4%",
							marginTop: "8%"
						}}
						onClick={() => actions.petProfilePost(allinObject, props.history)}>
						{" "}
						Submit
					</Button>
				</div>
			</div>
		</div>
	);
};
PetProfile.propTypes = {
	history: PropTypes.object
};
