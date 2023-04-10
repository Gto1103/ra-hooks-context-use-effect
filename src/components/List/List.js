import "./List.css";

const List = ({ id, name, handleActive}) => {

	const handleClick = (evt) => {
		evt.preventDefault();
		handleActive({id, name});
	}

	return(
		<li className="item" onClick={(handleClick)}>
			{name}
		</li>
	)
}

export default List;