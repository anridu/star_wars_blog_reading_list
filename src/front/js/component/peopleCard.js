import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";

export const PeopleCard = props => {
	const [details, setDetails] = useState();

	useEffect(() => {
		fetch(props.data.url)
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

				<Link to={`/people/${props.data.uid}`} className="btn btn-primary">
					See more
				</Link>
			</div>
		</div>
	);
};

PeopleCard.propTypes = {
	data: PropTypes.object
};
