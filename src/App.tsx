import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // variables
	const name = 'Ali';
	// const name2 = `${name}`;

  // functions

  // render
	return (
		<>
			<div className="App">
				{name}
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
			<div>Deneme1</div>
		</>
	);
}

export default App;
