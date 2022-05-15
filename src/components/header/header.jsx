import styles from './header.module.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ authenticate, loginState, setLoginState }) => {
	const goToMaker = (userId) => {
		navigate({ pathname: '/maker', state: { id: userId } });
	};
	const navigate = useNavigate();
	const onLogin = () => {
		authenticate.login().then((data) => goToMaker(data.user.uid));
	};

	const onLogout = () => {
		authenticate.logout();
	};

	useEffect(() => {
		authenticate.onAuthChange((user) =>
			user ? setLoginState(true) : setLoginState(false)
		);
	}, [loginState]);
	return (
		<div className={styles.header}>
			<h1 className={`${styles.title} ${styles.rotate} `}>The chair</h1>
			{loginState ? (
				<button className={styles.underline} onClick={onLogout}>
					Logout
				</button>
			) : (
				<button className={styles.underline} onClick={onLogin}>
					Login
				</button>
			)}
		</div>
	);
};

export default Header;
