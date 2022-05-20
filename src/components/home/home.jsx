import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/header';
import styles from './home.module.css';
const Home = ({ authenticate, loginState, setLoginState }) => {
	const navigate = useNavigate();

	const goToMaker = (userId) => {
		navigate('./maker', { state: { id: userId } });
	};

	useEffect(() => {
		authenticate.onAuthChange((user) => user && goToMaker(user.uid));
	}, []);

	return (
		<>
			<div className={styles.display}>
				<Header
					authenticate={authenticate}
					loginState={loginState}
					setLoginState={setLoginState}
				/>
				<section className={styles.section}>
					<h1 className={styles.title}>
						NOT JUST
						<br />
						ANOTHER
						<br />
						CHAIR
					</h1>

					<img
						src='https://avantt.displaay.net/assets/images//machine.58a1ffb7.628.jpg'
						alt=''
						className={styles.img}
					/>

					<p className={styles.desc}>
						At that time I was rather idealistic. 23 years old. I made friends
						with a young architect, and I bought my first bicycle. I learned to
						ride the bicycle and talked to this young fellow and told him that
						the bicycle seems to be a perfect production because it hasn’t
						changed in the last twenty, thirty years. It is still the original
						bicycle form.
					</p>
				</section>
			</div>
		</>
	);
};

export default Home;
