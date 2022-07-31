import React, { Component } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import TourPackages from "../TourPackages/TourPackages";
import WelcomeSection from "../WelcomeSection/WelcomeSection";

export default class Home extends Component {
	render() {
		return <Aux>
           <WelcomeSection/>
           <TourPackages noImage/>
        </Aux>;
	}
}
