import { SignUp } from "../views/signup";
import { Login } from "../views/login";
const urlUser = "https://3000-de395b5c-1b17-4654-85f9-05d0e94bcb02.ws-us02.gitpod.io/users";
const urlPet = "https://3000-de395b5c-1b17-4654-85f9-05d0e94bcb02.ws-us02.gitpod.io/pets";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			token: null,
			contacts: [],
			pets: []
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
			login(bubu) {
				console.log("logging:", bubu);
				fetch("https://3000-de395b5c-1b17-4654-85f9-05d0e94bcb02.ws-us02.gitpod.io/myLogin", {
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
