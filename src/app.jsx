import './app.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/home/home';
import Maker from './components/maker/maker';
import { useEffect, useState } from 'react';

function App({ ImgFileInput, authenticate, cardRepository }) {
	const [loginState, setLoginState] = useState(false);

	return (
		<>
			<Routes>
				<Route
					index
					element={
						<Home
							authenticate={authenticate}
							loginState={loginState}
							setLoginState={setLoginState}
						/>
					}
				/>
				<Route
					path='/maker'
					element={
						<Maker
							authenticate={authenticate}
							loginState={loginState}
							setLoginState={setLoginState}
							ImgFileInput={ImgFileInput}
							cardRepository={cardRepository}
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
