import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const favoritesItems = store.favorites.map((item, index) => {
		let url = "";
		if (item.properties.climate) {
			url = `/planet/${item.uid}`;
		} else if (item.properties.height) {
			url = `/people/${item.uid}`;
		}
		return (
			<Dropdown.Item key={index}>
				<Link to={url}>{item.properties.name}</Link>
				<i onClick={() => actions.removeItem(index)} className="fa fa-trash ml-2" aria-hidden="true" />
			</Dropdown.Item>
		);
	});
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand">
					<img src={starwars} width="50" height="30" alt="" />
				</span>
			</Link>
			<div className="ml-auto">
				<DropdownButton id="dropdown-basic-button" title={`Favorites ${store.favorites.length}`}>
					{favoritesItems}
				</DropdownButton>
			</div>
		</nav>
	);
};
