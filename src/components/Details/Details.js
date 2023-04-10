/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import './Details.css';

const URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

const Details = ({ info }) => {

	const { id } = info;
	const [details, setDetails] = useState(null);
	const [loaded, setLoading] = useState(false);

	const onLoadDetails = () => {
		fetch(`${URL}${id}.json`)
      .then((response) => response.json())
      .then((data) => {
			setDetails((prev) => ({ ...prev, ...data }));
			setLoading(true);
		})
      .catch((e) => console.log('Error: ' + e.message));
	}

	useEffect(()=> {
		setLoading(false);
		onLoadDetails();
		return ;
	}, [id]);

	return (!loaded ? <div className="details">Please wait, loading...</div> :
		<div className="details">
			<img className="avatar" src={details.avatar} alt="avatar" />
			<div className="name">{details.name}</div>
			<div className="city">City: {details.details.city}</div>
			<div className="company">Company: {details.details.company}</div>
			<div className="position">Position: {details.details.position}</div>
		</div>
	)
}

export default Details;