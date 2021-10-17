import React,{ useContext } from 'react';
import { AppContext } from '../context';
import { STUDENTS } from '../studentsList'


function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}

function Search() {
	const { dispatchUserEvent } = useContext(AppContext);
	// const [list, setList] = React.useState([]);
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');
 
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleDate(event) {
    setDate(event.target.value);
  }
  
  function userExists(username) {
	let mydate =[];
	return STUDENTS.filter(function(el) {
	  if( el.name.toLocaleLowerCase() === username.toLocaleLowerCase())
	  {
		  mydate =el.validityDate;
		  return {mydate}
	  }
	}); 
	
	return mydate;
  }
 
  function handleAdd() {	

var exist = userExists(name);


if(exist.length >0 && exist)
{
	const val = checkValidity(date,exist[0].validityDate);	
	if(val)
	{
		const user = { name, id: Math.floor(Math.random() * 100) };		
		dispatchUserEvent('EXIST_USER', { newUser: user });
	}
	else{
		const user = { name, id: Math.floor(Math.random() * 100) };	
	dispatchUserEvent('EXIST_USER_EXPIRED', { newUser: user });
	}
	
}
else{
	const user = { name, id: Math.floor(Math.random() * 100) };	
	dispatchUserEvent('NO_USER', { newUser: user });
}

}

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" value={name} onChange={handleChange}/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" value={date} onChange={handleDate}/>
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={handleAdd}>Add</button>
		</div>
	);
}

export default Search;
