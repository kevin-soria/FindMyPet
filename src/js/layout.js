import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { AlertMsg } from "./views/alertMessage";
import { Single } from "./views/single";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import injectContext from "./store/appContext";
import { Dashboard } from "./views/dashboard.js";
import { DashboardB } from "./views/dashboardB";
import { Navibar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PetProfile } from "./views/petProfileForm";
import { BottomCards } from "./component/bottomCards";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navibar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/alertMsg" component={AlertMsg} />
						<Route path="/login" component={Login} />
						<Route path="/petProfile" component={PetProfile} />
						<Route path="/signup" component={Signup} />
						<Route path="/dashboard" component={Dashboard} />
						<Route path="/dashboard-b" component={DashboardB} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<BottomCards />
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
