import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

let PawStyle = {
	fontSize: "70px"
};

let FormStyles = {
	borderStyle: "15px solid white",
	boxShadow: " 0px 10px 30px -5px rgb(8, 71, 8)",
	width: "50%",
	float: "left",
	marginRight: "2%",
	marginLeft: "2%",
	marginBottom: "2%",
	marginTop: "2%"
};

let ImgStiles = {
	width: "40%",
	float: "right",
	backgroundRepeat: "no-repeat",
	marginRight: "2%",
	marginTop: "2%",
	marginBottom: "2%"
};

let InputStyles = {
	padding: "10px",
	borderStyle: "solid",
	borderWidth: "2px",
	width: "80%",
	marginLeft: "12%"
};

// let TextStyles = {
// 	marginLeft: "25%",
// 	marginTop: "1%",
// 	fontFamily: "Playfair Display, serif",
// 	color: " #3e4244"
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
				<div className="text-center mt-5">
					<div className="row">
						<i style={PawStyle} className="fas fa-paw col-6  pl-5 pt-3" />
						<Form className="col-6">
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									rows="3"
									onChange={e => setAllinObject({ ...allinObject, description: e.target.value })}
									value={allinObject.description}
								/>
							</Form.Group>
						</Form>
					</div>
					<div className="row">
						<div className="col-md-6">
							<form method="post" action="#" id="#">
								<div className="form-group files color">
									<label>Pet Photo </label>
									<input
										type="file"
										name="file"
										// placeholder="Upload an image"
										onChange={uploadImage}
									/>
									{loading ? <h3>Loading...</h3> : <img src={image} style={{ width: "100px" }} />}
								</div>
							</form>
							<Form>
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
						</div>
						<Form className="col-md-6">
							<Form.Group controlId="formGroupNickname">
								<Form.Label>Pet NickName</Form.Label>
								<Form.Control
									type="nickname"
									placeholder="Input Your Pets Nickname"
									onChange={e => setAllinObject({ ...allinObject, name: e.target.value })}
									value={allinObject.name}
								/>
							</Form.Group>
							<Form.Group controlId="formGroupGender">
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
						<Form.Group className="col" controlId="formGroupAnimal">
							<Form.Label>Animal</Form.Label>
							<Form.Control
								type="animal"
								placeholder="Type of animal?"
								onChange={e => setAllinObject({ ...allinObject, animal: e.target.value })}
								value={allinObject.animal}
							/>
						</Form.Group>
						<Form.Group className="col" controlId="formGroupBreed">
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
						<Form.Group className="col" controlId="formGroupEyecolor">
							<Form.Label>Eye color</Form.Label>
							<Form.Control
								type="animal"
								placeholder="Pets eye color?"
								onChange={e => setAllinObject({ ...allinObject, eyecolor: e.target.value })}
								value={allinObject.eyecolor}
							/>
						</Form.Group>
						<Form.Group className="col" controlId="formGroupFurcolor">
							<Form.Label>Fur Color</Form.Label>
							<Form.Control
								type="breed"
								placeholder="Pets fur color?"
								onChange={e => setAllinObject({ ...allinObject, furcolor: e.target.value })}
								value={allinObject.furcolor}
							/>
						</Form.Group>
					</Form>
					<Button onClick={() => actions.petProfilePost(allinObject, props.history)}>Submit</Button>
				</div>
			</div>
		</div>
	);
};
PetProfile.propTypes = {
	history: PropTypes.object
};
