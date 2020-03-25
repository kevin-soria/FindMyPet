import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

let FormStyles = {
	borderStyle: "solid",
	borderWidth: "2px",
	width: "47%",
	float: "right",
	marginRight: "2%",
	marginBottom: "2%",
	height: "633px",
	marginTop: "2%"
};

let ImgStiles = {
	width: "47%",
	float: "left",
	backgroundRepeat: "no-repeat",
	marginLeft: "2%",
	marginTop: "2%"
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

let HeadStyles = {
	marginLeft: "12%",
	marginTop: "12%",
	marginBottom: "5%"
};

let ButtonStyles = {
	width: "80%",
	marginLeft: "12%",
	marginBottom: "5%",
	marginTop: "5%",
	padding: "10px",
	boxShadow: "4px 4px grey"
};

let CheckStyles = {
	marginLeft: "12%"
};

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [allinObject, setAllinObject] = useState({
		email: "",
		password: ""
	});
	return (
		<div>
			<div>
				<img
					src="https://image.freepik.com/free-photo/blue-yellow-macaw-parrot-ara-ararauna_58995-111.jpg"
					style={ImgStiles}
				/>
			</div>
			<form style={FormStyles}>
				<div className="form-group">
					<h2 style={HeadStyles}>ACCOUNT LOGIN</h2>
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
				<div style={CheckStyles} className="form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Receive news and special offers
					</label>
				</div>
				<button
					id="btnLogin"
					style={ButtonStyles}
					type="button"
					className="btn btn-dark"
					onClick={() => actions.login(allinObject)}>
					Submit
				</button>
				<div>
					<div className="align-content-center">
						<p className="text-center">Dont have an account yet?</p>
					</div>
					<div className="text-center p-2">
						<Link to="/signup">SingUp</Link>
					</div>
				</div>
			</form>
		</div>
	);
};
