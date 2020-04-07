import { SignUp } from "../views/signup";
import { Login } from "../views/login";
import { Feed } from "../views/feed";
import { AlertMsg } from "../views/alertMessage";
const urlUser = "https://3000-aa6da014-4123-47d9-9d75-0c55c612d6ef.ws-us02.gitpod.io/users";
const urlAlert = "https://3000-aa6da014-4123-47d9-9d75-0c55c612d6ef.ws-us02.gitpod.io/alert";
const urlMessage = "https://3000-aa6da014-4123-47d9-9d75-0c55c612d6ef.ws-us02.gitpod.io/message";
const urlPet = "https://3000-aa6da014-4123-47d9-9d75-0c55c612d6ef.ws-us02.gitpod.io/pets";
const urlBreeds = "https://api.thedogapi.com/v1/breeds";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			breeds: [],
			users: [],
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
			sendSmsAlert: bubu_id => {
				fetch(urlAlert + "/" + bubu_id + "/sendmsg");
			},

			createAlert: (message, email, name, petname, phone, history) => {
				console.log("amiworkinginfunc", message, email, name, petname, phone);
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
				})
					.then(() => {
						fetch(urlAlert)
							.then(res => res.json())
							.then(result => {
								console.log("createAlertworking", result),
									setStore({
										alerts: result
									});
							});
					})
					.then(() => history.push("/feed"));
			},

			register(bubu, props) {
				// console.log(bubu);
				return fetch("https://3000-aa6da014-4123-47d9-9d75-0c55c612d6ef.ws-us02.gitpod.io/register", {
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

			petProfilePost(bubu, history) {
				console.log("buburesult", bubu);
				fetch(urlPet, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(() => getActions().getUser())
					.then(() => history.push("/dashboard-b"))
					.catch(e => console.error("error in add" + e));
			},
			deletePet: (id, history) => {
				fetch(urlPet + "/" + `${id}`, { method: "DELETE" })
					.then(() => {
						console.log("Pet profile deleted successfully");
						getActions().getUser();
					})
					// .then(() => history.push("/dashboard-b"))
					.catch(function(error) {
						console.log("There was an Error : \n", error);
					});
			},
			login(bubu, history) {
				console.log("logging:", bubu);
				return fetch("https://3000-aa6da014-4123-47d9-9d75-0c55c612d6ef.ws-us02.gitpod.io/myLogin", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(res => res.json())
					.then(result => {
						setStore({ contacts: result });
					})
					.then(() => history.push("/dashboard-b"))
					.catch(e => console.error("error in login" + e));
			},
			logout() {
				let store = getStore();
				setStore({ contacts: [] });
			}
		}
	};
};
export default getState;
