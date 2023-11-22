import React, { Fragment, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassComponentSample from './components/ClassComponentSample';
import FunctionComponentSample from './components/FunctionComponentSample';

function App() {
	// function componentlerde state durumlarını kontrol etmek Hook yapıları kullanırız
	// useState Hook ile state değişikliğini yapıyoruz.
	const [visible, setVisible] = useState<boolean>(false);
	const [visibleFunc, setVisibleFunc] = useState<boolean>(false);
	// visible getter, setVisible setter
	const toggle = () => {
		setVisible(!visible);
	};

	const toggleClassToFunction = () => {
		setVisibleFunc(!visibleFunc);
	};

	// render methoduna denk gelir.
	return (
		<>
			<div className="App">
				{visible && (
					// <ClassComponentSample
					// 	title="React Class"
					// 	body="React Class Component Sample"
					// />
					<FunctionComponentSample
						title="React Function"
						body="React Func Component Sample"
					/>
				)}
				<button onClick={toggle}>Toggle Visible</button>

				<hr></hr>
				{/* ternaryİf kullanımı */}
				{visibleFunc ? (
					<FunctionComponentSample title="Func" />
				) : (
					<ClassComponentSample title="Class" />
				)}
				<button onClick={toggleClassToFunction}>Func to Class Component</button>
			</div>
		</>
	);
}

export default App;
