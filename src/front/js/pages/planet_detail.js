import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";

export const PlanetDetail = () => {
	const [details, setDetails] = useState();
	const params = useParams();
	console.log(params);
	useEffect(() => {
		fetch(`https://www.swapi.tech/api/planets/${params.id}`)
			.then(resp => resp.json())
			.then(data => {
				setDetails(data.result.properties);
			});
	}, []);

	return (
		<div className="card box-shadow">
			<img className="card-img-top" src={rigoImage} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{details ? details.name : "loading"}</h5>
				<p className="card-text">{details ? details.population : "loading"}</p>
				<Link to="/" className="btn btn-primary">
					Home
				</Link>
			</div>
		</div>
	);
};
