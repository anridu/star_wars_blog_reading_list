import React from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";
export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand">
					<img src={starwars} width="50" height="30" alt="" />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary dropdown-toggle">
						favorities
						<span className="badge badge-secondary"> 0</span>
					</button>
					{/* <ul class="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        <li><hr className="dropdown-divider"></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul> */}
				</Link>
			</div>
		</nav>
	);
};
