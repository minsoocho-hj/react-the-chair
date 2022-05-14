import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ButtonUnderLine.module.css';

const ButtonUnderLine = ({ authenticate, loginState, setLoginState }) => {
	const goToMaker = (userId) => {
		navigate({ pathname: '/maker', state: { id: userId } });
	};
	const navigate = useNavigate();
	const onLogin = () => {
		authenticate.login().then((data) => goToMaker(data.user.uid));
	};

	const onLogout = () => {
		authenticate.logout().then(() => navigate('/'));
	};

	useEffect(() => {
		authenticate.onAuthChange((user) =>
			user ? setLoginState(true) : setLoginState(false)
		);
	}, [loginState]);

	return (
		<>
			{loginState ? (
				<button className={styles.underline} onClick={onLogout}>
					Logout
				</button>
			) : (
				<button className={styles.underline} onClick={onLogin}>
					Login
				</button>
			)}
		</>
	);
};

export default ButtonUnderLine;
