import { SignUp } from "../views/signup";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			loadSomeData: () => {
				fetch("https://3000-c4d9839d-6b65-4a8d-b74a-faecf751a16a.ws-us02.gitpod.io/")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// console.log("im working");
						return response.json();
					})
					.then(data => setStore({ contacts: data }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			Register(bubu, props) {
				console.log(bubu);
				fetch("https://3000-ea51e26f-3190-4c36-9249-10b08bb6c0c8.ws-us02.gitpod.io/register", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(bubu)
				}).catch(e => console.error("error in add" + e));
			}
			// EditContact: (bubu, tiger, tutu, mama, gigi) => {
			// 	fetch("https://3000-d5a4c0e7-ef79-4dfa-bd72-53e0c821f70e.ws-us02.gitpod.io/user/" + gigi, {
			// 		method: "PUT",
			// 		headers: { "Content-Type": "application/json" },
			// 		body: JSON.stringify({
			// 			username: bubu,
			// 			phone: mama,
			// 			address: tutu,
			// 			email: tiger
			// 		})
			// 	}).catch(e => console.error("errrrror" + e));
			// }
		}
	};
};

export default getState;
