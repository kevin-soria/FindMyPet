import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

let FormStyles = {
	borderStyle: "solid",
	borderWidth: "2px",
	width: "47%",
	marginLeft: "1%",
	marginBottom: "2%"
};

let InputStyles = {
	padding: "20px",
	borderStyle: "solid",
	borderWidth: "4px",
	width: "80%",
	marginLeft: "12%"
};

let TextStyles = {
	marginLeft: "12%",
	marginTop: "1%"
};

let ButtonStyles = {
	width: "80%",
	marginLeft: "12%",
	marginBottom: "5%",
	marginTop: "2%",
	padding: "10px",
	boxShadow: "4px 4px grey"
};

let InptStyles = {
	padding: "20px",
	borderStyle: "solid",
	borderWidth: "4px",
	width: "80%",
	marginLeft: "25%"
};

let InptStylesLN = {
	padding: "20px",
	borderStyle: "solid",
	borderWidth: "4px",
	width: "80%",
	marginLeft: "2%"
};

let TextStylesFN = {
	marginLeft: "25%",
	marginTop: "1%"
};

let TextStylesLN = {
	marginLeft: "5%",
	marginTop: "1%"
};

export const Signup = props => {
	const { store, actions } = useContext(Context);

	const [allinObject, setAllinObject] = useState({
		firstname: "",
		lastname: "",
		address: "",
		email: "",
		zipcode: "",
		username: "",
		password: ""
	});

	return (
		<>
			{/* ------------------------------------------username----------------------------------- */}
			<div style={FormStyles}>
				<div className="form-group">
					<h2 style={TextStyles}>ACCOUNT REGISTRATION</h2>
					<label style={TextStyles} htmlFor="exampleInputEmail1">
						User Name
					</label>
					<input
						style={InputStyles}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter First Name"
						onChange={e => setAllinObject({ ...allinObject, username: e.target.value })}
						value={allinObject.username}
					/>
				</div>
				{/* // --------------------------------email--------------------------- */}
				<div className="form-group">
					<label style={TextStyles} htmlFor="exampleInputEmail1">
						Email address
					</label>
					<input
						style={InputStyles}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						onChange={e => setAllinObject({ ...allinObject, email: e.target.value })}
						value={allinObject.email}
					/>
					<small style={TextStyles} id="emailHelp" className="form-text text-muted">
						Well never share your email with anyone else.
					</small>
				</div>
				{/* ------------------------------------------firstname----------------------------------- */}
				<div className="row">
					<div className="form-group col">
						<label style={TextStylesFN} htmlFor="exampleInputEmail1">
							First Name
						</label>
						<input
							type="text"
							style={InptStyles}
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter First Name"
							onChange={e => setAllinObject({ ...allinObject, firstname: e.target.value })}
							value={allinObject.firstname}
						/>
					</div>
					{/* ----------------------------------------lastname-------------------------- */}
					<div className="form-group col">
						<label style={TextStylesLN} htmlFor="exampleInputEmail1">
							Last Name
						</label>
						<input
							style={InptStylesLN}
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							placeholder="Enter Last Name"
							onChange={e => setAllinObject({ ...allinObject, lastname: e.target.value })}
							value={allinObject.lastname}
						/>
					</div>
				</div>
				{/* ---------------------------------------------------address-------------------------- */}
				<div className="form-group">
					<label style={TextStyles} htmlFor="exampleInputEmail1">
						Address
					</label>
					<input
						style={InputStyles}
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						placeholder="Enter address"
						onChange={e => setAllinObject({ ...allinObject, address: e.target.value })}
						value={allinObject.address}
					/>
					<small style={TextStyles} id="emailHelp" className="form-text text-muted">
						Well never share your Address with anyone else.
					</small>
				</div>
				{/* ----------------------zip code------------------------- */}
				<div className="form-group">
					<label style={TextStyles} htmlFor="exampleInputEmail1">
						Zip Code
					</label>
					<input
						style={InputStyles}
						type="number"
						className="form-control"
						id="exampleInputEmail1"
						placeholder="Enter Zip Code"
						onChange={e => setAllinObject({ ...allinObject, zipcode: e.target.value })}
						value={allinObject.zipcode}
					/>
					<small style={TextStyles} id="emailHelp" className="form-text text-muted">
						Well never share your email with anyone else.
					</small>
				</div>
				{/* ---------------------------------password-------------------------- */}
				<div className="form-group">
					<label style={TextStyles} htmlFor="exampleInputPassword1">
						Password
					</label>
					<input
						style={InputStyles}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
						onChange={e => setAllinObject({ ...allinObject, password: e.target.value })}
						value={allinObject.password}
					/>
				</div>

				<button
					id="btnLogin"
					style={ButtonStyles}
					type="submit"
					className="btn btn-dark"
					onClick={() => actions.register(allinObject, props)}>
					Submit
				</button>
				<div>
					<div className="align-content-center">
						<p className="text-center">Already have an account?</p>
					</div>
					<div className="text-center p-2">
						<Link to="/login">LogIn</Link>
					</div>
				</div>
			</div>
		</>
	);
};
