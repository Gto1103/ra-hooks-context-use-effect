/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List/List';
import Details from './components/Details/Details';

const URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

function App() {

	const [userList, setUserList] = useState({
		users: [],
		error: ''
	});
	const [loaded, setLoading] = useState(false);
	const [activeUser, setActiveUser] = useState(null);

	const onLoadList = () => {
		fetch(URL + 'users.json')
      .then((response) => response.json())
      .then((data) => {
			setUserList({users: data, error: ''});
			setLoading(true);
		})
      .catch((e) => {
			setUserList({...userList, error: e.message});
			setLoading(false);
			console.log('Error: ' + e.message)});
	}

	useEffect(()=> {
		setLoading(false);
		onLoadList();
		return ;
	}, []);

	const onActive = (info) => {
		setActiveUser(info);
	}

	return (
		<div className = "App">
			<div className='wrapper-list'>
				{!loaded ? <div className="loading">Please wait, loading...</div> : 
					<>
						<ul className='item-list'>
							{userList.users && loaded &&
								userList.users.map(item => 
									<List 
										key={item.id} 
										{...item}
										handleActive={onActive} />)
								}
						</ul>
						<div className='wrapper-details'>
							{activeUser !== null ? <Details info={activeUser} /> : null}
						</div>
					</>
				}
			</div>
		</div>
	);
}

export default App;
