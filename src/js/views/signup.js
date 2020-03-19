import React, { useState } from "react";

export const Signup = () => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [firstname, setfirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [address, setaddress] = useState("");
	const [zipcode, setzipcode] = useState("");
	const [allinobject, setallinobject] = useState("");


	return (
		<>
			{/* // --------------------------------email--------------------------- */}
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
					onChange={e => setemail(e.target.value)}
					value={email}
				/>
				<small id="emailHelp" className="form-text text-muted">
					Well never share your email with anyone else.
				</small>
			</div>
			{/* ------------------------------------------firstname----------------------------------- */}
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">First Name</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter First Name"
					onChange={e => setfirstname(e.target.value)}
					value={firstname}
				/>
			</div>
			{/* ----------------------------------------lastname-------------------------- */}
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Last Name</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					placeholder="Enter Last Name"
					onChange={e => setlastname(e.target.value)}
					value={lastname}
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
					onChange={e => setaddress(e.target.value)}
					value={address}
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
					onChange={e => setzipcode(e.target.value)}
					value={zipcode}
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
					onChange={e => setpassword(e.target.value)}
					value={password}
				/>
			</div>

			<button type="submit" onClick={} className="btn btn-primary">
				Submit
			</button>
        </>
	);
};
