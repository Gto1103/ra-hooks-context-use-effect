/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

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
			<img src={details.avatar} alt="avatar" />
			<h3 className="name">{details.name}</h3>
			<div className="city">{details.details.city}</div>
			<div className="company">{details.details.company}</div>
			<div className="position">{details.details.position}</div>
		</div>
	)
}

export default Details;