import React from "react";
import PropType from "prop-types";

//include images into your bundle

//create your first component
export function SecondCounter(props) {
	return (
		<>
			<html>
				<head>
					<meta charset="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<title>Counter</title>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
						integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
						crossOrigin="anonymous"
					/>
					<link rel="shortcut icon" href="./4geeks.ico" />
				</head>
				<body>
					<nav className="navbar navbar-light">
						<div className="row w-100">
							<div className="col-2">
								<a className="navbar-logo" href="#">
									<img
										src="http://topnotchmarketingsolutionsllc.com/wp-content/uploads/2018/11/Full_straight-copy-80x80.png"
										width="60"
										height="60"
										alt=""
										loading="lazy"
									/>
								</a>
							</div>
							<div className="col-8 text-center">
								<a
									className="header navbar-brand mx-auto mt-3 mb-4"
									href="#">
									Simple Counter
								</a>
							</div>
							<div className="col-2" />
						</div>
					</nav>
					<div className="wrapper card d-flex flex-column align-items-center justify-content-center" />

					<div className="counter">
						<div className="container bg-dark text-white rounded-pill">
							<div className="row d-flex justify-content-center">
								<div className="col ">
									<i className="far fa-clock" />
								</div>
								<div className="col ">
									{props.secondsTwo % 10}
								</div>
								<div className="col">
									{props.secondsOne % 59}
								</div>
							</div>
						</div>
					</div>

					<footer className="footer fixed-bottom w-100">
						<p>
							Made with the power of{" "}
							<i className="fas fa-coffee" /> by Chris Angelos
						</p>
					</footer>
				</body>
			</html>
		</>
	);
}
SecondCounter.propTypes = {
	secondsOne: PropType.number,
	secondsTwo: PropType.number
};
