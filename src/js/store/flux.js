import { SignUp } from "../views/signup";
import { Login } from "../views/login";
import { AlertMsg } from "../views/alertMessage";
const urlUser = "https://3000-ff1abb9a-fd4c-44ee-8c0e-7701bb60c2ce.ws-us02.gitpod.io/users";
const urlAlert = "https://3000-ff1abb9a-fd4c-44ee-8c0e-7701bb60c2ce.ws-us02.gitpod.io/alert";
const urlPet = "https://3000-ff1abb9a-fd4c-44ee-8c0e-7701bb60c2ce.ws-us02.gitpod.io/pets";
const urlBreeds = "https://api.thedogapi.com/v1/breeds";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			breeds: [],
			users: [],
			token: null,
			contacts: [],
			pets: [],
			alerts: []
		},
		actions: {
			getUser: () => {
				fetch(urlUser)
					.then(res => res.json())
					.then(result => {
						console.log("resultUsers", result),
							setStore({
								users: result
							});
					})
					.catch();
			},

			getPet: () => {
				fetch(urlPet)
					.then(res => res.json())
					.then(result => {
						console.log("resultPet", result),
							setStore({
								pets: result
							});
					})
					.catch();
			},
			getBreeds: () => {
				fetch(urlBreeds, {
					method: "GET",
					headers: { "x-api-key": "681dd748-e189-4181-b766-a245737f09b8" }
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ breeds: data });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			getAlerts: () => {
				fetch(urlAlert)
					.then(res => res.json())
					.then(result => {
						console.log("resultAlert", result),
							setStore({
								alerts: result
							});
					});
				// .catch();
			},
			// createAlert: (message, email, zipcode, firstname, lastname, phone) => {
			// 	console.log(123);
			// },

			createAlert: (message, email, name, petname, phone) => {
				// console.log("amiworkinginfunc");
				fetch(urlAlert, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						message: message,
						email: email,
						name: name,
						petname: petname,
						phone: phone
					})
				}).then(() => {
					fetch(urlAlert)
						.then(res => res.json())
						.then(result => {
							console.log("createAlertworking", result),
								setStore({
									alerts: result
								});
						});
				});
			},

			register(bubu, props) {
				// console.log(bubu);
				fetch("https://3000-de395b5c-1b17-4654-85f9-05d0e94bcb02.ws-us02.gitpod.io/register", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(res => res.json())
					.then(result => {
						setStore({
							users: result
						});
					})
					.catch(e => console.error("error in add" + e));
			},

			petProfilePost(bubu, props) {
				// console.log(bubu);
				fetch("https://3000-ff1abb9a-fd4c-44ee-8c0e-7701bb60c2ce.ws-us02.gitpod.io/pets", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(res => res.json())
					.then(result => {
						setStore({
							pets: result
						});
					})
					.catch(e => console.error("error in add" + e));
			},

			login(bubu) {
				console.log("logging:", bubu);
				fetch("https://3000-ff1abb9a-fd4c-44ee-8c0e-7701bb60c2ce.ws-us02.gitpod.io/myLogin", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(res => res.json())
					.then(result => {
						setStore({
							contacts: result
						});
						console.log("success");
					})

					.catch(e => console.error("error in login" + e));
			}
		}
	};
};
export default getState;
