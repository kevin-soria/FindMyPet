import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const AlertMsg = () => (
	<div className="text-center mt-5">
		<Form>
			<Form.Group controlId="formBasicInfo">
				<Form.Label>Contact info</Form.Label>
				<Form.Control type="email" placeholder="Enter your info" />
				<Form.Text className="text-muted">Well never share your info with anyone else.</Form.Text>
			</Form.Group>

			<Form.Group controlId="formBasicMessage">
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows="3" type="text" placeholder="Message" />
			</Form.Group>
			<Form.Group controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
	</div>
);
