import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from '../cardlist/cardlist';
import Editor from '../editor/editor';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authenticate, loginState, setLoginState }) => {
	const [userId, setUserId] = useState();

	const navigate = useNavigate();
	// useEffect(() => {
	// 	if (!userId) {
	// 		navigate('/');
	// 	}
	// }, [userId]);

	useEffect(() => {
		authenticate.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			} else {
				navigate('/');
			}
		});
	});

	return (
		<>
			<div className={styles.maker}>
				<Header
					authenticate={authenticate}
					loginState={loginState}
					setLoginState={setLoginState}
				/>
				<section className={styles.section}>
					<Editor />
					<CardList />
				</section>
			</div>
		</>
	);
};

export default Maker;
