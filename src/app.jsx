import './app.module.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Maker from './components/maker/maker';

function App({ onAuth }) {
	return (
		<Routes>
			<Route index element={<Home onAuth={onAuth} />} />
			<Route path='/maker' element={<Maker />} />
		</Routes>
	);
}

export default App;
