import React, { useState } from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import { AppContext } from './context';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {
  const [ users, setUsers ] = useState([]);
  const [enabled, setEnabled] = useState(false)
  const [errName, setErrName] = useState('')
  const [validity, setValidity] = useState(false)

  const dispatchUserEvent = (actionType, payload) => {
		switch (actionType) {
			case 'EXIST_USER':
				setUsers([ ...users, payload.newUser ]);
        setEnabled(false);
        setValidity(false)
        console.log(`dispath users list ${users}`)
        console.log(`dispath action type ${actionType}`)
        console.log(`dispath user ${payload.newUser.name }`)
        
				return;
			case 'NO_USER':
        console.log('No user')
        console.log(`dispath user ${payload.newUser.name }`)
				setEnabled(true);
        setErrName(payload.newUser.name)
				return;
        case 'EXIST_USER_EXPIRED':
        console.log('No user')
        console.log(`dispath user ${payload.newUser.name }`)
				setValidity(true);
        setErrName(payload.newUser.name)
				return;
			default:
				return;
		}
	};
  return (
    <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <AppContext.Provider value={{ users, dispatchUserEvent }}>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search />
        {enabled ? <Error name={`Sorry ${errName} is not a verified student`}/> : ""}
        {validity ? <Error name={`Sorry ${errName} validity has expired`}/> : ""}
        <ResidentsList/>
      </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
