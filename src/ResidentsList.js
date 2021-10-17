import React, { useContext }  from 'react';
import { AppContext } from '../context';
function ResidentsList() {
	const { users } = useContext(AppContext);
	console.log(`dispath residents ${users.name}`)
	return (
		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
			{users.map(user => <li key={user.id} className="slide-up-fade-in">{user.name} </li>)}		
				
			</ul>
		</div>
	);
}

export default ResidentsList;
