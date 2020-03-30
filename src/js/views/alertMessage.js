import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Context } from "../store/appContext";

let FormStyles = {
	borderStyle: "solid",
	borderWidth: "4px",
	marginRight: "2%",
	marginBottom: "2%",
	marginLeft: "2%"
};

let InputStyles = {
	padding: "10px",
	width: "80%",
	marginLeft: "12%"
};

export const AlertMsg = () => {
	const { actions } = useContext(Context);
	const [message, setMessage] = useState("");
	const [selectpet, setSelectPet] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [email, setEmail] = useState("");
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");

	return (
		<div style={FormStyles}>
			<div className="text-center mt-5">
				<Form>
					<Form.Group style={InputStyles} controlId="formBasicInfo">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Firstname"
							defaultValue={firstname}
							onChange={e => setFirstName(e.target.value)}
						/>
						<Form.Control
							type="text"
							placeholder="Lastname"
							defaultValue={lastname}
							onChange={e => setLastName(e.target.value)}
						/>
						<Form.Text className="text-muted">Your First Name & Last Name area prefered </Form.Text>
					</Form.Group>

					<Form.Group style={InputStyles} controlId="formBasicInfo">
						<Form.Label>Phone Number:</Form.Label>
						<Form.Control type="text" placeholder="Enter Phone Number" />
						<Form.Text className="text-muted">
							Only to be share to notify a possible user of a lead.
						</Form.Text>
					</Form.Group>

					<Form.Group style={InputStyles} controlId="formBasicInfo">
						<Form.Label>Contact info</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter Email"
							defaultValue={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<Form.Text className="text-muted">Well never share your info with anyone else.</Form.Text>
					</Form.Group>
					{/* 
					<Form.Group style={InputStyles} controlId="formBasicInfo">
						<Form.Label>What kind of animal do are we talking about?</Form.Label>
						<Form.Control
							as="select"
							defaultValue={pet}
							placeholder="Select an Animal"
							onChange={e => setPet(e.target.value)}>
							<option>Dog</option>
							<option>Cat</option>
						</Form.Control>
					</Form.Group> */}

					<Form.Group style={InputStyles} controlId="formBasicInfo">
						<Form.Label>Zip Code:</Form.Label>
						<Form.Control type="text" placeholder="Enter Zip Code" />
						<Form.Text
							className="text-muted"
							defaultValue={zipcode}
							onChange={e => setZipcode(e.target.value)}>
							Only to be share to notify a possible owner/finders Nearby.
						</Form.Text>
					</Form.Group>

					<Form.Group style={InputStyles} controlId="formBasicMessage">
						<Form.Label>Message</Form.Label>
						<Form.Control
							as="textarea"
							rows="3"
							type="text"
							defaultValue={message}
							placeholder="Input Detail"
							onChange={e => setMessage(e.target.value)}
						/>
					</Form.Group>

					<Button
						variant="primary"
						type="submit"
						onClick={() => actions.createAlert(message, email, zipcode, firstname, lastname)}>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};
