import React, { useState } from "react";

export const Signup = () => {
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");

	return (
		<form>
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
			<div className="form-check">
				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
				<label className="form-check-label" htmlFor="exampleCheck1">
					Check me out
				</label>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
