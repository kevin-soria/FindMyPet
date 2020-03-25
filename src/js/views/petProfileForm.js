import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

let PawStyle = {
	fontSize: "70px"
};

export const PetProfile = () => (
	<div className="text-center mt-5">
		<div className="row">
			<i style={PawStyle} className="fas fa-paw col-6  pl-5 pt-3" />
			<Form className="col-6">
				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Description</Form.Label>
					<Form.Control as="textarea" rows="3" />
				</Form.Group>
			</Form>
		</div>
		<div className="row">
			<div className="col-md-6">
				<form method="post" action="#" id="#">
					<div className="form-group files color">
						<label>Upload Pet Photo </label>
						<input type="file" className="form-control" multiple="" />
					</div>
				</form>
			</div>
			<Form className="col-md-6">
				<Form.Group controlId="formGroupNickname">
					<Form.Label>Pet NickName</Form.Label>
					<Form.Control type="nickname" placeholder="Input Your Pets Nickname" />
				</Form.Group>
				<Form.Group controlId="formGroupGender">
					<Form.Label>Gender</Form.Label>
					<Form.Control type="gender" placeholder="Gender of your Pet" />
				</Form.Group>
			</Form>
		</div>
		<Form className="row">
			<Form.Group className="col" controlId="formGroupAnimal">
				<Form.Label>Animal</Form.Label>
				<Form.Control type="animal" placeholder="Type of animal?" />
			</Form.Group>
			<Form.Group className="col" controlId="formGroupBreed">
				<Form.Label>Breed</Form.Label>
				<Form.Control type="breed" placeholder="Input Breed" />
			</Form.Group>
		</Form>
		<Form className="row">
			<Form.Group className="col" controlId="formGroupEyecolor">
				<Form.Label>Eye color</Form.Label>
				<Form.Control type="animal" placeholder="Pets eye color?" />
			</Form.Group>
			<Form.Group className="col" controlId="formGroupFurcolor">
				<Form.Label>Fur Color</Form.Label>
				<Form.Control type="breed" placeholder="Pets fur color?" />
			</Form.Group>
		</Form>
		<Button>Submit</Button>
	</div>
);
