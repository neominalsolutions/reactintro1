import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponentSample from './components/ClassComponentSample';

function App() {
	// function componentlerde state durumlarını kontrol etmek Hook yapıları kullanırız
	// useState Hook ile state değişikliğini yapıyoruz.
	const [visible, setVisible] = useState<boolean>(false);
	// visible getter, setVisible setter
	const toggle = () => {
		setVisible(!visible);
	};

	// render methoduna denk gelir.
	return (
		<>
			<div className="App">
				{visible && (
					<ClassComponentSample
						title="React Class"
						body="React Class Component Sample"
					/>
				)}
				<button onClick={toggle}>Toggle Visible</button>
			</div>
		</>
	);
}

export default App;
