import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Signup = props => {
	// const [email, setemail] = useState("");
	// const [password, setpassword] = useState("");
	// const [firstname, setfirstname] = useState("");
	// const [lastname, setlastname] = useState("");
	// const [address, setaddress] = useState("");
	// const [zipcode, setzipcode] = useState("");
	// const [allinobject, setallinobject] = useState("");
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
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">User Name</label>
				<input
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
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
					onChange={e => setAllinObject({ ...allinObject, email: e.target.value })}
					value={allinObject.email}
				/>
				<small id="emailHelp" className="form-text text-muted">
					Well never share your email with anyone else.
				</small>
			</div>
			{/* ------------------------------------------firstname----------------------------------- */}
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">First Name</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter First Name"
					onChange={e => setAllinObject({ ...allinObject, firstname: e.target.value })}
					value={allinObject.firstname}
				/>
			</div>
			{/* ----------------------------------------lastname-------------------------- */}
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Last Name</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					placeholder="Enter Last Name"
					onChange={e => setAllinObject({ ...allinObject, lastname: e.target.value })}
					value={allinObject.lastname}
				/>
			</div>
			{/* ---------------------------------------------------address-------------------------- */}
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Address</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					placeholder="Enter address"
					onChange={e => setAllinObject({ ...allinObject, address: e.target.value })}
					value={allinObject.address}
				/>
				<small id="emailHelp" className="form-text text-muted">
					Well never share your Address with anyone else.
				</small>
			</div>
			{/* ----------------------zip code------------------------- */}
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Zip Code</label>
				<input
					type="number"
					className="form-control"
					id="exampleInputEmail1"
					placeholder="Enter Zip Code"
					onChange={e => setAllinObject({ ...allinObject, zipcode: e.target.value })}
					value={allinObject.zipcode}
				/>
				<small id="emailHelp" className="form-text text-muted">
					Well never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Password"
					onChange={e => setAllinObject({ ...allinObject, password: e.target.value })}
					value={allinObject.password}
				/>
			</div>
			<button type="submit" className="btn btn-primary" onClick={() => actions.Register(allinObject, props)}>
				Submit
			</button>
		</>
	);
};
