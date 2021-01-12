//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";
import { SecondCounter } from "./component/secondcounter.js";
//render your react application

let counter = 0;
setInterval(function() {
	const one = Math.floor(counter);
	const two = Math.floor(counter / 60);
	counter++;

	ReactDOM.render(
		<SecondCounter secondsOne={one} secondsTwo={two} />,
		document.querySelector("#app")
	);
}, 1000);
