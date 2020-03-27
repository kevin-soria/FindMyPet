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
	padding: "20px",
	width: "80%",
	marginLeft: "12%"
};

export const AlertMsg = () => {
	const { actions } = useContext(Context);
	const [message, setMessage] = useState("");

	return (
		<div style={FormStyles}>
			<div className="text-center mt-5">
				<Form>
					<Form.Group style={InputStyles} controlId="formBasicInfo">
						<Form.Label>Contact info</Form.Label>
						<Form.Control type="email" placeholder="Enter your info" />
						<Form.Text className="text-muted">Well never share your info with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group style={InputStyles} controlId="formBasicMessage">
						<Form.Label>Message</Form.Label>
						<Form.Control
							as="textarea"
							rows="3"
							type="text"
							defaultValue={message}
							placeholder="Message"
							onChange={e => setMessage(e.target.value)}
						/>
					</Form.Group>
					<Form.Group controlId="formBasicCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button variant="primary" type="submit" onClick={() => actions.createAlert(message)}>
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};
