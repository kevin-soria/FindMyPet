import { SignUp } from "../views/signup";
import { Login } from "../views/login";
const urlUser = "https://3000-de395b5c-1b17-4654-85f9-05d0e94bcb02.ws-us02.gitpod.io/users";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			token: null,
			contacts: [
				{
					username: "",
					email: "",
					firstname: "",
					lastname: "",
					zipcode: "",
					address: ""
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			// onDelete: bubu => {
			// 	console.log(bubu);
			// 	fetch("https://3000-c4d9839d-6b65-4a8d-b74a-faecf751a16a.ws-us02.gitpod.io/" + bubu, {
			// 		method: "delete"
			// 	})
			// 		.then(response =>
			// 			response.json().then(json => {
			// 				return json;
			// 			})
			// 		)
			// 		.catch(function(error) {
			// 			console.log("Looks like there was a problem: \n", error);
			// 		});
			// },
			// loadSomeData: () => {
			// 	fetch("https://3000-de395b5c-1b17-4654-85f9-05d0e94bcb02.ws-us02.gitpod.io/")
			// 		.then(function(response) {
			// 			if (!response.ok) {
			// 				throw Error(response.statusText);
			// 			}
			// 			// console.log("im working");
			// 			return response.json();
			// 		})
			// 		.then(data => setStore({ contacts: data }))
			// 		.catch(function(error) {
			// 			console.log("Looks like there was a problem: \n", error);
			// 		});
			// },
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
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
			register(bubu, props) {
				console.log(bubu);
				fetch("https://3000-de395b5c-1b17-4654-85f9-05d0e94bcb02.ws-us02.gitpod.io/register", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				}).catch(e => console.error("error in add" + e));
			},
			login(bubu) {
				// console.log(bubu);
				fetch("https://3000-de395b5c-1b17-4654-85f9-05d0e94bcb02.ws-us02.gitpod.io/myLogin", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				})
					.then(res => res.json())
					.then(result => {
						setStore({
							token: result
						});
					})

					.catch(e => console.error("error in login" + e));
			}
		}
	};
};
export default getState;
