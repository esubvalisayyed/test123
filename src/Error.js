import React from 'react';

function Error(props) {
	console.log(props)
	return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in"> {props.name}</div>
}

export default Error;
