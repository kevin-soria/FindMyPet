import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Peteditor = props => {
	const { actions, store } = useContext(Context);
	// const [phone, setPhone] = useState(store.contacts.phone);
	const [petname, setUsername] = useState(store.contacts.petname);
	const [animal, setAnimal] = useState(store.contacts.animal);
	const [breed, setBreed] = useState(store.contacts.breed);
	const [bodymarks, setBodymarks] = useState(store.contacts.bodymarks);
	const [eyecolor, setEyecolor] = useState(store.contacts.eyecolor);
	const [weight, setWeight] = useState(store.contacts.weight);
	const [length, setLength] = useState(store.contacts.length);
	const [height, setHeight] = useState(store.contacts.height);
	const [furtype, setFurtype] = useState(store.contacts.furtype);
	const [age, setAge] = useState(store.contacts.age);
	const [gender, setGender] = useState(store.contacts.gender);
	const [microchipno, setMicrochipno] = useState(store.contacts.microchipno);
	const [diet, setDiet] = useState(store.contacts.diet);
	const [activitylvl, setActivitylvl] = useState(store.contacts.activitylvl);
	const [allergies, setAllergies] = useState(store.contacts.allergies);
	const [medcond, setMedcond] = useState(store.contacts.medcond);
	const [foodschedule, setFoodschedule] = useState(store.contacts.foodschedule);
	const [sterilized, setSterilized] = useState(store.contacts.sterilized);
	

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Current contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							value={name}
							onChange={e => {
								setName(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							value={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							value={address}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
                    {/* -------------------------------------button to view/edit pets---------------------------- */}
					<Link to={"/pededitor.js"}>
						<button
							typse="button"
							className="btn btn-primary form-control"
							onClick={() => actions.Dashboard(name, email, address, phone, props.match.params.meme)}>
							save Contact
						</button>
					</Link>
                    {/* -------------------------------------homepage------------------------------- */}
                    <Link to={"/"}>
						<button
							typse="button"
							className="btn btn-primary form-control"
							onClick={() => actions.Dashboard(name, email, address, phone, props.match.params.meme)}>
						    or get back to Home Page
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to Home Page
					</Link>
				</form>
			</div>
		</div>
	);
};