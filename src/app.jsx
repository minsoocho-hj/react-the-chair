import './app.module.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/home/home';
import Maker from './components/maker/maker';
import { useEffect, useState } from 'react';

function App({ ImgFileInput, authenticate }) {
	const [loginState, setLoginState] = useState(false);
	const navigate = useNavigate();

	const goToMaker = (userId) => {
		navigate({ pathname: '/maker', id: userId });
	};

	useEffect(() => {
		authenticate.onAuthChange((user) => user && goToMaker(user.uid));
	}, []);

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
						/>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
